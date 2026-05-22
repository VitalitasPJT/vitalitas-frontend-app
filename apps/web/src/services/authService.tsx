import { api } from "./apiURL";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LoginApiResponse {
  IdUsuario: string;
  TipoUsuario: number;   // enum numérico: 1=Instrutor, 2=Aluno, 3=Gestor, 4=Administrador
  IdAcademia: string;    // adicionado no backend — Guid da academia do gestor
  Flag: boolean;
  Token: string;
  RefreshToken: string;
  Status: { Message: string; Code: number; Sucess: boolean };
}

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

// ─── Criar Usuário ────────────────────────────────────────────────────────────

export async function criarUsuario(data: Record<string, unknown>) {
  const response = await api.post("/gestor/criar-usuario", data);
  return response.data;
}

export async function criarAluno(data: Record<string, unknown>) {
  const response = await api.post("/gestor/criar-aluno", data);
  return response.data;
}

export async function criarInstrutor(data: Record<string, unknown>) {
  const response = await api.post("/gestor/criar-instrutor", data);
  return response.data;
}
