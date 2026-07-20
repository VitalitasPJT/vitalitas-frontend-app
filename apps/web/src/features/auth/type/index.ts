export interface LoginApiResponse {
  IdUsuario: string;
  TipoUsuario: number;   // enum numérico: 1=Instrutor, 2=Aluno, 3=Gestor, 4=Administrador
  IdAcademia: string;    // adicionado no backend — Guid da academia do gestor
  Flag: boolean;
  Token: string;
  RefreshToken: string;
  Status: { Message: string; Code: number; Sucess: boolean };
}