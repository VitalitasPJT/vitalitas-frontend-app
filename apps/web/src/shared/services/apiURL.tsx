import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getAuthItem, setAuthItem, clearAuthItems } from "@/shared/services/tokenStorage";

export const api = axios.create({
  baseURL: "http://localhost:5156",
});

// ─── Request: anexa o access token ──────────────────────────────────────────

api.interceptors.request.use((config) => {
  const token = getAuthItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ─── Response: renova o token em 401 e repete a requisição original ────────
//
// Endpoints usados: POST /usuario/refresh, recebendo { AccessToken,
// RefreshToken } e devolvendo o mesmo par renovado (ver Swagger/
// UsuarioController.cs). Um refresh malsucedido responde 401 com
// { message }, não com o DTO — por isso o catch abaixo trata qualquer erro
// da chamada de refresh como "sessão perdida".

interface RefreshTokenResponse {
  AccessToken: string;
  RefreshToken: string;
}

interface RetryableConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Endpoints que nunca devem disparar a lógica de refresh: um 401 aqui
// significa "credenciais inválidas" ou "refresh token também expirado",
// não "access token expirado no meio de uma sessão válida".
const AUTH_ENDPOINTS = ["/usuario/login", "/usuario/refresh"];

let isRefreshing = false;
let pendingQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

function resolveQueue(token: string) {
  pendingQueue.forEach(({ resolve }) => resolve(token));
  pendingQueue = [];
}

function rejectQueue(error: unknown) {
  pendingQueue.forEach(({ reject }) => reject(error));
  pendingQueue = [];
}

/**
 * Antes limpava localStorage direto. Agora usa clearAuthItems, que limpa
 * dos dois storages (independente de qual estava ativo) — mesmo motivo de
 * AuthContext.logout(): evita resíduo se o modo de "lembrar-me" mudar
 * entre logins.
 */
function forceLogout() {
  clearAuthItems(["user", "token", "refreshToken"]);
  window.location.href = "/vitalitas/user/login";
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableConfig | undefined;
    const isAuthEndpoint = AUTH_ENDPOINTS.some((path) => originalRequest?.url?.includes(path));

    if (error.response?.status !== 401 || !originalRequest || originalRequest._retry || isAuthEndpoint) {
      return Promise.reject(error);
    }

    const refreshToken = getAuthItem("refreshToken");
    const accessToken = getAuthItem("token");

    if (!refreshToken) {
      forceLogout();
      return Promise.reject(error);
    }

    // Já existe um refresh em andamento — entra na fila e espera o token
    // novo em vez de disparar outra chamada de refresh em paralelo.
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingQueue.push({
          resolve: (newToken: string) => {
            originalRequest._retry = true;
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(api(originalRequest));
          },
          reject,
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const response = await axios.post<RefreshTokenResponse>(
        `${api.defaults.baseURL}/usuario/refresh`,
        { AccessToken: accessToken, RefreshToken: refreshToken }
      );

      const { AccessToken: newAccessToken, RefreshToken: newRefreshToken } = response.data;

      setAuthItem("token", newAccessToken);
      setAuthItem("refreshToken", newRefreshToken);

      resolveQueue(newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      rejectQueue(refreshError);
      forceLogout();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);
