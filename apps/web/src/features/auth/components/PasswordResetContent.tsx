import { useState } from 'react';
import { Lock, X } from 'lucide-react';
import { InputField } from '@/shared/components/inputs/InputField';
import { Button } from '@/shared/components/ui/Button';
import { PasswordRequirements } from '@/shared/components/password/PasswordRequirements';
import { PasswordStrengthMeter } from '@/shared/components/password/PasswordStrengthMeter';
import { usePasswordValidation } from '@/shared/hooks/usePasswordValidation';
import { resetPassword } from '@/shared/services/userService';

interface PasswordResetContentProps {
  /** Id do usuário logado — necessário para PUT /aluno/trocar-senha */
  userId: string;
  onClose: () => void;
  onSuccess?: () => void;
}

/**
 * Conteúdo do modal de alteração de senha (fluxo pós-login quando
 * LoginApiResponse.Flag === true, ver LoginForm.tsx).
 *
 * Mudanças em relação à versão anterior:
 * - Campo "Nova senha" passou a usar InputField (antes reimplementava o
 *   markup na mão e, por isso, não tinha o botão de mostrar/ocultar senha
 *   que o campo "Confirmar senha" já tinha — inconsistência corrigida).
 * - Campo "Confirmar senha" trocou de PasswordInput (local, sem dark mode)
 *   para InputField (compartilhado, com dark mode).
 * - Botões "SALVAR"/"CANCELAR" trocaram de markup manual para o componente
 *   Button, com estado disabled nativo em vez de cor calculada na mão.
 * - Validação de senha migrou para usePasswordValidation (fonte única).
 * - Ícones SVG manuais trocados por lucide-react.
 * - Cores hex soltas trocadas pelos tokens de tailwind.css.
 * - alert('Senha alterada com sucesso!') removido; agora chama
 *   resetPassword() de shared/services/userService.tsx de fato, com
 *   feedback de erro em caso de falha na API.
 */
export function PasswordResetContent({ userId, onClose, onSuccess }: PasswordResetContentProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { isValid: isPasswordValid } = usePasswordValidation(newPassword);
  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== '';
  const confirmHasError = !passwordsMatch && confirmPassword !== '';
  const canSave = isPasswordValid && passwordsMatch && !isSubmitting;

  async function handleSave() {
    if (!isPasswordValid || !passwordsMatch) return;

    setSubmitError('');
    setIsSubmitting(true);

    try {
      await resetPassword(userId, newPassword);
      onSuccess?.();
      onClose();
    } catch {
      setSubmitError('Não foi possível alterar a senha. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="modal-card-4k w-full max-w-[672px] bg-surface rounded-2xl sm:rounded-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">
      <div className="modal-inner-4k flex flex-col gap-6 sm:gap-8 p-6 sm:p-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="modal-icon-4k bg-brand rounded-full size-14 sm:size-16 flex items-center justify-center shrink-0">
            <Lock size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="text-center">
            <p className="modal-title-4k font-['Montserrat'] font-bold text-ink text-2xl sm:text-[32px] leading-tight">
              Alteração de Senha
            </p>
            <p className="modal-subtitle-4k font-['Inter'] font-normal text-body text-sm sm:text-base leading-relaxed mt-2">
              Digite uma <span className="font-bold text-ink">nova senha</span>, ela não pode ser igual à senha anterior.
            </p>
          </div>
        </div>

        {/* Requisitos */}
        <PasswordRequirements password={newPassword} />

        {/* Campos */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full">

          {/* Nova senha */}
          <div className="flex flex-col gap-2 w-full">
            <InputField
              id="newPassword"
              label="Nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              icon={<Lock size={20} />}
              isPassword
            />
            {newPassword.length > 0 && <PasswordStrengthMeter password={newPassword} />}
          </div>

          {/* Confirmar senha */}
          <div className="flex flex-col gap-2 w-full">
            <InputField
              id="confirmPassword"
              label="Confirme a nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              icon={<Lock size={20} />}
              isPassword
              error={confirmHasError ? 'As senhas não coincidem' : undefined}
            />
          </div>

          {/* Erro de submissão */}
          {submitError && (
            <div className="flex gap-2 items-center">
              <X size={16} className="text-danger" />
              <p className="font-['Inter'] font-normal text-danger text-sm">{submitError}</p>
            </div>
          )}

          {/* Botão Salvar */}
          <Button variant="primary" size="lg" fullWidth disabled={!canSave} onClick={handleSave}>
            {isSubmitting ? 'SALVANDO...' : 'SALVAR'}
          </Button>

          {/* Botão Cancelar */}
          <Button variant="secondary" size="lg" fullWidth onClick={onClose}>
            CANCELAR
          </Button>
        </div>
      </div>
    </div>
  );
}
