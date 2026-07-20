import { api } from "@/shared/services/apiURL";
import type { LoginApiResponse } from "@/features/auth/type/index.ts";
// ─── Types ────────────────────────────────────────────────────────────────────

export interface UserProfileResponse {
  Nome: string;
  AvatarUrl: string | null;
}

// ─── Login ────────────────────────────────────────────────────────────────────

export async function loginRequest(email: string, password: string): Promise<LoginApiResponse> {
  const response = await api.post("/usuario/login", { Email: email, Senha: password });
  const data: LoginApiResponse = response.data;

  localStorage.setItem("token", data.Token);
  localStorage.setItem("refreshToken", data.RefreshToken);

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