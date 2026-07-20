import { ConstRoutes } from "./Routes";

export const tipoUsuarioMap: Record<number, string> = {
  1: "Instrutor",
  2: "Aluno",
  3: "Gestor",
  4: "Administrador",
}

export const RoleRoutes: Record<string, string> = {
  Instrutor:     ConstRoutes.INSTRUTOR,
  Aluno:         ConstRoutes.ALUNO,
  Gestor:        ConstRoutes.GESTOR,
  Administrador: ConstRoutes.ADMIN,
};