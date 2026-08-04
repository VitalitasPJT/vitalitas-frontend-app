import PasswordFirstAccess from "../components/PasswordFirstAccess";

/**
 * Renomeado de PasswordResetPage.tsx para PasswordFirstAccessPage.tsx.
 *
 * O nome antigo ("reset de senha") causou uma confusão real na revisão:
 * fazia parecer que essa rota pertencia ao fluxo de "esqueci minha senha
 * por e-mail" (PasswordResetContent), quando na verdade essa página é do
 * fluxo de "primeiro acesso com senha provisória" (confirmado em
 * AppRoutes.tsx — a rota /vitalitas/user/resetpassword importa este
 * arquivo, não PasswordResetContent).
 *
 * Requer atualizar o import em AppRoutes.tsx de acordo (ver arquivo
 * AppRoutes.tsx atualizado).
 *
 * Fundo trocado de bg-[#e5e5e5] para bg-section-alt (token com dark mode
 * automático — ver PasswordFirstAccess.tsx para o restante das mudanças).
 */
export default function PasswordFirstAccessPage() {
  return (
    <div className="size-full flex bg-section-alt items-center justify-center">
      <PasswordFirstAccess />
    </div>
  );
}
