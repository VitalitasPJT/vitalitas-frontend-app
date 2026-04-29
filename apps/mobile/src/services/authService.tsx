import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:5156/vitalitas",
});

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/user/login", { Email: email, Senha: password });
  return response.data;
}