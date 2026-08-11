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

export const PERFIL_OPTIONS = [
  { label: 'Aluno', value: 'aluno' },
  { label: 'Instrutor', value: 'instrutor' },
  { label: 'Gestor', value: 'gestor' },
  { label: 'Administrador', value: 'admin' },
];

// PERFIL_LABEL derivado de PERFIL_OPTIONS (não duplicado à mão) — usado
// no fluxo de criar usuário (Step2.tsx, Step3.tsx, UserForm.tsx) pra
// exibir o perfil formatado a partir do valor salvo em formData.perfil
// ('aluno', 'instrutor'...). Antes existia um arquivo à parte
// (shared/constants/PerfilLabel.ts) recriando esses mesmos 4 pares à mão
// — apagado, porque PERFIL_OPTIONS já continha exatamente essa
// informação.
export const PERFIL_LABEL: Record<string, string> = Object.fromEntries(
  PERFIL_OPTIONS.map((opcao) => [opcao.value, opcao.label])
);
