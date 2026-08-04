import api from "./api";

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/usuario/login", {
    Email: email,
    Senha: password,
  });
  return response.data;
}

export async function trocarSenhaRequest(idUsuario: string, novaSenha: string) {
  const response = await api.put("/aluno/trocar-senha", {
    IdUsuario: idUsuario,
    NovaSenha: novaSenha,
  });
  return response.data;
}

export async function refreshRequest(accessToken: string, refreshToken: string) {
  const response = await api.post("/usuario/refresh", {
    AccessToken: accessToken,
    RefreshToken: refreshToken,
  });
  return response.data;
}