import { api } from "./apiURL";

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/user/login", { Email: email, Senha: password });
  return response.data;
}