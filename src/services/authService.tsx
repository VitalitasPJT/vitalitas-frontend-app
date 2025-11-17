import { api } from "./apiURL";

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/user/login", { email, password });
  return response.data;
}