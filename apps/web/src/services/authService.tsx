import { api } from "./apiURL";

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/usuario/login", { Email: email, Senha: password });
  return response.data;
}

export async function criarUsuario(data: any) {
  const response = await api.post( "/gestor/criar-usuario", data);
  return response.data;
}