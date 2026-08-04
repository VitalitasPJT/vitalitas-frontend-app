import { api } from "@/shared/services/apiURL";
import { setAuthStorageMode, setAuthItem } from "@/shared/services/tokenStorage";
import type { LoginApiResponse } from "@/features/auth/type/index.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UserProfileResponse {
  Nome: string;
  AvatarUrl: string | null;
}

// ─── Login ────────────────────────────────────────────────────────────────────

/**
 * rememberMe adicionado: decide se o token vai para localStorage
 * (sobrevive ao fechar o navegador) ou sessionStorage (some ao fechar a
 * aba). Antes, o token sempre ia pra localStorage direto — o checkbox
 * "Lembrar-me" no LoginForm existia visualmente, mas não tinha efeito
 * nenhum no comportamento real.
 */
export async function loginRequest(
  email: string,
  password: string,
  rememberMe: boolean
): Promise<LoginApiResponse> {
  const response = await api.post("/usuario/login", { Email: email, Senha: password });
  const data: LoginApiResponse = response.data;

  setAuthStorageMode(rememberMe);
  setAuthItem("token", data.Token);
  setAuthItem("refreshToken", data.RefreshToken);

  return data;
}

// ─── Perfil ───────────────────────────────────────────────────────────────────

/**
 * TODO: implementar quando GET /usuario/:id/perfil estiver disponível.
 */
export async function fetchUserProfile(userId: string): Promise<UserProfileResponse> {
  const response = await api.get(`/usuario/${userId}/perfil`);
  return response.data;
}

// ─── Recuperação de senha ───────────────────────────────────────────────────

/**
 * TODO: confirmar/implementar quando o endpoint de recuperação de senha por
 * e-mail estiver disponível no backend (ex.: POST /usuario/recuperar-senha).
 */
export async function requestPasswordRecovery(email: string): Promise<void> {
  await api.post("/usuario/recuperar-senha", { Email: email });
}
