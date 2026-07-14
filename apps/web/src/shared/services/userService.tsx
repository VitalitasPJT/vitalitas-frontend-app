import { api } from "./apiURL";

// ─── Senha ────────────────────────────────────────────────────────────────────

export async function resetPassword(id: string, newPassword: string): Promise<void> {
  await api.put("/aluno/trocar-senha", {
    IdUsuario: id,
    NovaSenha: newPassword,
  });
}

// ─── Criação de usuários ──────────────────────────────────────────────────────

/**
 * Cria o registro base do usuário (nome, email, endereço, etc.)
 * POST /gestor/criar-usuario
 * Retorna: { IdUsuario: Guid, Status }
 */
export async function criarUsuario(data: Record<string, unknown>) {
  const response = await api.post("/gestor/criar-usuario", data);
  return response.data;
}

/**
 * Vincula o usuário criado como Aluno (objetivo, instrutor, contrato)
 * POST /gestor/criar-aluno
 * Retorna: { IdAluno: Guid, Status }
 */
export async function criarAluno(data: Record<string, unknown>) {
  const response = await api.post("/gestor/criar-aluno", data);
  return response.data;
}

/**
 * Vincula o usuário criado como Instrutor (CREF)
 * POST /gestor/criar-instrutor
 * Retorna: { IdInstrutor: Guid, Status }
 */
export async function criarInstrutor(data: Record<string, unknown>) {
  const response = await api.post("/gestor/criar-instrutor", data);
  return response.data;
}
