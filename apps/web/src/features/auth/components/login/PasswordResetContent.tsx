import { useState } from 'react';
import { PasswordRequirements } from './PasswordRequirements';
import { PasswordStrength } from './PasswordStrength';
import { PasswordInput } from './PasswordInput';

function LockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="14" width="16" height="12" rx="2" />
      <path d="M11 14v-4a5 5 0 0 1 10 0v4" />
      <circle cx="16" cy="20" r="1.5" fill="white" stroke="none" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#E7000B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="4" x2="4" y2="12" />
      <line x1="4" y1="4" x2="12" y2="12" />
    </svg>
  );
}

interface PasswordResetContentProps {
  onClose: () => void;
}

export function PasswordResetContent({ onClose }: PasswordResetContentProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== '';
  const confirmHasError = !passwordsMatch && confirmPassword !== '';

  const hasMinLength = newPassword.length >= 8;
  const hasUpperAndLower = /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword);
  const hasSpecialChar = /[#$%&@!?^*()_\-+=[\]{};':"\\|,.<>/]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const isPasswordValid = hasMinLength && hasUpperAndLower && hasSpecialChar && hasNumber;

  const canSave = isPasswordValid && passwordsMatch;

  function handleSave() {
    if (!canSave) return;
    alert('Senha alterada com sucesso!');
    onClose();
  }

  return (
    /*
      w-full + max-w: ocupa toda a largura disponível até o limite de 672px
      padding responsivo: p-6 em mobile, sm:p-10 em telas médias, modal-padding-4k em 4K
    */
    <div className="modal-card-4k w-full max-w-[672px] bg-white rounded-2xl sm:rounded-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">
      <div className="modal-inner-4k flex flex-col gap-6 sm:gap-8 p-6 sm:p-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="modal-icon-4k bg-gradient-to-b from-[#ee2b47] to-[#c41e36] rounded-full size-14 sm:size-16 flex items-center justify-center shrink-0">
            <LockIcon />
          </div>
          <div className="text-center">
            <p className="modal-title-4k font-['Montserrat'] font-bold text-[#101828] text-2xl sm:text-[32px] leading-tight">
              Alteração de Senha
            </p>
            <p className="modal-subtitle-4k font-['Inter'] font-normal text-[#4a5565] text-sm sm:text-base leading-relaxed mt-2">
              Digite uma <span className="font-bold text-[#101828]">nova senha</span>, ela não pode ser igual à senha anterior.
            </p>
          </div>
        </div>

        {/* Requisitos */}
        <PasswordRequirements password={newPassword} />

        {/* Campos */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full">

          {/* Nova senha */}
          <div className="flex flex-col gap-2 w-full">
            <p className="modal-label-4k font-['Inter'] font-semibold text-[#364153] text-sm">
              Nova senha
            </p>
            <div className="modal-field-4k h-14 relative w-full">
              <div className="h-full rounded-[14px] w-full bg-transparent">
                <div className="flex items-center pl-4 pr-12 py-3.5 size-full">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Digite sua nova senha"
                    className="modal-input-4k font-['Inter'] font-normal w-full bg-transparent outline-none text-base text-[#101828] placeholder:text-[rgba(16,24,40,0.5)]"
                  />
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#e5a4a7] inset-0 pointer-events-none rounded-[14px]" />
              </div>
            </div>
            {newPassword.length > 0 && (
              <PasswordStrength password={newPassword} />
            )}
          </div>

          {/* Confirmar senha */}
          <div className="flex flex-col gap-2 w-full">
            <PasswordInput
              label="Confirme a nova senha"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Confirme sua nova senha"
              error={confirmHasError}
            />
            {confirmHasError && (
              <div className="flex gap-2 items-center">
                <ErrorIcon />
                <p className="font-['Inter'] font-normal text-[#e7000b] text-sm">
                  As senhas não coincidem
                </p>
              </div>
            )}
          </div>

          {/* Botão Salvar */}
          <button
            onClick={handleSave}
            disabled={!canSave}
            className={`modal-btn-4k h-14 sm:h-[60px] rounded-[14px] w-full transition-colors font-['Inter'] font-bold text-base sm:text-lg text-white ${
              canSave
                ? 'bg-[#ee2b47] hover:bg-[#d02640] cursor-pointer'
                : 'bg-[#f9a8b3] cursor-not-allowed'
            }`}
          >
            SALVAR
          </button>

          {/* Botão Cancelar */}
          <button
            onClick={onClose}
            className="modal-btn-4k bg-[#d1d5dc] h-14 sm:h-[60px] rounded-[14px] w-full hover:bg-[#bcc1c9] transition-colors font-['Inter'] font-bold text-base sm:text-lg text-black"
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}
