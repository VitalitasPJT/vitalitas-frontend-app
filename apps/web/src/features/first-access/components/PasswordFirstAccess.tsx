import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { resetPassword } from "@/shared/services/userService";
import { useAuth } from "@/shared/hooks/useAuth";

import { InputField } from "@/shared/components/inputs/InputField";
import { Button } from "@/shared/components/ui/Button";
import { IconBadge } from "@/shared/components/ui/IconBadge";
import { FormFeedbackMessage } from "@/shared/components/ui/FormFeedbackMessage";
import { PasswordRequirements } from "@/shared/components/password/PasswordRequirements";
import { PasswordStrengthMeter } from "@/shared/components/password/PasswordStrengthMeter";
import { usePasswordValidation } from "@/shared/hooks/usePasswordValidation";

/**
 * Formulário de primeiro acesso (troca da senha temporária).
 *
 * Mudanças em relação à versão anterior:
 * - Função renomeada de PasswordResetPage para PasswordFirstAccess, batendo
 *   com o nome do arquivo (o nome antigo colidia com o conceito de
 *   "reset de senha", que é um fluxo diferente — ver observação sobre
 *   PasswordResetContent.tsx).
 * - getRequirements/getStrength locais removidos; agora usa
 *   usePasswordValidation, a mesma fonte única de verdade usada em
 *   PasswordResetContent e PasswordRecoverModal.
 *   ATENÇÃO: a regra de caractere especial daqui era mais restrita
 *   (/[#$%&@!*?]/) que a do hook compartilhado. Confirmar com o backend
 *   antes de considerar essa migração fechada — ver mensagem no chat.
 * - Ícones SVG manuais trocados por lucide-react.
 * - Círculo do cabeçalho trocado por IconBadge (era gradiente custom
 *   red-500→red-700; ficou bg-brand sólido, consistente com as outras
 *   telas de senha).
 * - Botões trocados por Button (mesmo motivo: gradiente custom → sólido).
 * - Erro/sucesso trocados por FormFeedbackMessage.
 * - Cores hex/Tailwind soltas (gray-900, red-500, green-50...) trocadas
 *   pelos tokens de shared/tailwind.css — e por vir dos tokens, a tela
 *   ganha suporte a dark mode "de graça", que não existia antes.
 * - REMOVIDO: useEffect que redirecionava se user.Flag === false, e o
 *   `if (!user) return null`. Esse componente só é renderizado dentro da
 *   rota /vitalitas/user/resetpassword, que já é protegida pelo guard
 *   PasswordResetRoute — ele garante isAuthenticated, user e user.Flag
 *   antes mesmo deste componente montar. Manter a checagem aqui também era
 *   duplicar a responsabilidade do guard dentro do componente de UI.
 */
export default function PasswordFirstAccess() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { isValid: isPasswordValid } = usePasswordValidation(newPassword);
  const passwordsMatch = confirmPassword.length > 0 && newPassword === confirmPassword;
  const mismatch = confirmPassword.length > 0 && !passwordsMatch;
  const canSave = isPasswordValid && passwordsMatch && !isSubmitting;

  async function handleSubmit() {
    setError("");
    if (!isPasswordValid) return setError("A senha não atende aos requisitos mínimos.");
    if (!passwordsMatch) return setError("As senhas não coincidem.");
    if (!user?.Id) return setError("Usuário inválido.");

    setIsSubmitting(true);
    try {
      await resetPassword(user.Id, newPassword);
      setSuccess(true);

      setTimeout(() => {
        logout();
        navigate("/vitalitas/user/login");
      }, 3000);
    } catch {
      setError("Erro ao atualizar a senha. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCancel() {
    logout();
    navigate("/vitalitas/user/login");
  }

  return (
    <div className="bg-surface w-full max-w-[560px] rounded-3xl shadow-2xl p-10">

      {/* Ícone */}
      <div className="flex justify-center mb-6">
        <IconBadge icon={<Lock size={28} className="text-white" strokeWidth={2} />} size="lg" tone="brand" />
      </div>

      {/* Título */}
      <h1 className="text-3xl font-extrabold text-ink text-center mb-3 tracking-tight">
        Primeiro Acesso
      </h1>
      <p className="text-sm text-body text-center mb-8 leading-relaxed px-4">
        Este é seu <strong className="text-ink">primeiro acesso</strong>. Digite uma{" "}
        <strong className="text-ink">nova senha</strong>, ela não pode ser igual à senha temporária.
      </p>

      {/* Requisitos */}
      <div className="mb-7">
        <PasswordRequirements password={newPassword} />
      </div>

      {/* Nova senha */}
      <div className="mb-5">
        <InputField
          id="newPassword"
          label="Nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          icon={<Lock size={20} />}
          isPassword
        />
        {newPassword.length > 0 && (
          <div className="mt-3">
            <PasswordStrengthMeter password={newPassword} />
          </div>
        )}
      </div>

      {/* Confirmar senha */}
      <div className="mb-2">
        <InputField
          id="confirmPassword"
          label="Confirme a nova senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<Lock size={20} />}
          isPassword
          error={mismatch ? "As senhas não coincidem" : undefined}
        />
      </div>

      {/* Erro geral */}
      {error && (
        <div className="mt-2">
          <FormFeedbackMessage variant="error">{error}</FormFeedbackMessage>
        </div>
      )}

      {/* Toast de sucesso */}
      {success && (
        <div className="mt-6">
          <FormFeedbackMessage variant="success" boxed>
            Senha alterada com sucesso! Redirecionando...
          </FormFeedbackMessage>
        </div>
      )}

      {/* Botões */}
      <div className="flex flex-col gap-3 mt-8">
        <Button variant="primary" size="lg" fullWidth disabled={!canSave} onClick={handleSubmit}>
          {isSubmitting ? "SALVANDO..." : "SALVAR"}
        </Button>
        <Button variant="secondary" size="lg" fullWidth onClick={handleCancel}>
          CANCELAR
        </Button>
      </div>

    </div>
  );
}
