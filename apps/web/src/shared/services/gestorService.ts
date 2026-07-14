import { api } from "./apiURL";

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
