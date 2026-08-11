import { useState } from 'react';
import { Mail, MailCheck } from 'lucide-react';
import { Modal } from '@/shared/components/ui/Modal';
import { InputField } from '@/shared/components/inputs/InputField';
import { Button } from '@/shared/components/ui/Button';
import { requestPasswordRecovery } from '@/features/auth/services/authService';

interface PasswordRecoverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Modal de "esqueci minha senha" — substitui ModalPasswordRecover.tsx.
 *
 * O arquivo antigo já cobria parte do fluxo (pedir e-mail, validar formato,
 * mensagem de sucesso), então foi atualizado em vez de recriado do zero,
 * mas com mudanças estruturais:
 * - Markup Bootstrap (modal fade show, btn-close, form-control, btn-danger)
 *   trocado por Tailwind, consistente com o resto do projeto.
 * - Backdrop/overlay próprio removido; agora usa o componente Modal.tsx
 *   genérico já existente em shared, em vez de reimplementar um.
 * - Input de e-mail trocado por InputField (compartilhado, com dark mode).
 * - Botões trocados por Button (compartilhado).
 * - Export renomeado para inglês (era ModalRecuperarSenha).
 *
 * Sobre o envio de e-mail: o endpoint ainda não existe no backend (ver TODO
 * em authService.tsx). A chamada a requestPasswordRecovery já está
 * estruturada para quando o endpoint existir; até lá, uma falha na chamada
 * é registrada no console mas não bloqueia a mensagem de confirmação
 * exibida ao usuário, para não travar o teste do fluxo no protótipo.
 */
export function PasswordRecoverModal({ isOpen, onClose }: PasswordRecoverModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function handleClose() {
    setEmail('');
    setError('');
    setIsSent(false);
    onClose();
  }

  async function handleConfirm() {
    setError('');

    if (!EMAIL_REGEX.test(email)) {
      setError('Digite um e-mail válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      await requestPasswordRecovery(email);
    } catch (err) {
      // TODO: remover este catch silencioso quando o endpoint de
      // recuperação de senha estiver disponível e confirmado no backend.
      console.error('Falha ao solicitar recuperação de senha:', err);
    } finally {
      setIsSubmitting(false);
      setIsSent(true);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="w-full max-w-md bg-surface rounded-2xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] p-6 sm:p-8">
        <div className="flex flex-col items-center gap-3 text-center mb-6">
          <div className="bg-brand rounded-full size-14 flex items-center justify-center shrink-0">
            {isSent ? (
              <MailCheck size={28} className="text-white" strokeWidth={2.5} />
            ) : (
              <Mail size={28} className="text-white" strokeWidth={2.5} />
            )}
          </div>
          <p className="font-['Montserrat'] font-bold text-ink text-xl sm:text-2xl">Recuperar senha</p>
          {!isSent && (
            <p className="font-['Inter'] text-body text-sm">
              Digite o e-mail cadastrado para receber as instruções de recuperação.
            </p>
          )}
        </div>

        {!isSent ? (
          <div className="flex flex-col gap-5">
            <InputField
              id="recoveryEmail"
              label="E-mail cadastrado"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail size={20} />}
              error={error}
            />

            <div className="flex flex-col gap-3">
              <Button variant="primary" size="lg" fullWidth disabled={isSubmitting} onClick={handleConfirm}>
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
              </Button>
              <Button variant="secondary" size="lg" fullWidth onClick={handleClose}>
                CANCELAR
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <p className="font-['Inter'] font-semibold text-success text-center">
              E-mail de recuperação enviado com sucesso!
            </p>
            <Button variant="primary" size="lg" fullWidth onClick={handleClose}>
              FECHAR
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
