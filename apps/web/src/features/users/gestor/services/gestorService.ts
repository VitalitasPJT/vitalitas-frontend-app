import { api } from "@/shared/services/apiURL";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AlunoItem {
  IdAluno: string;
  IdAcademia: string;
  IdUsuario: string;
  TipoUsuario: number;
  Objetivo: string;
  Nome: string;
  Email: string;
  StatusPagamento: string;
}

export interface ListarAlunosResponse {
  Alunos: AlunoItem[];
  Status: { Message: string; Code: number; Sucess: boolean };
}

// ─── Endpoints ────────────────────────────────────────────────────────────────

export async function listarAlunos(idAcademia: string): Promise<ListarAlunosResponse> {
  const response = await api.get(`/gestor/listar-alunos/${idAcademia}`)
  return response.data;
}

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
