import { type ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/*
        w-full: o filho (PasswordResetContent) controla seu próprio max-w
        max-h evita que em telas pequenas o modal ultrapasse a tela
        overflow-y-auto: scroll interno quando o conteúdo é maior que a tela
      */}
      <div className="relative z-10 flex w-full justify-center max-h-[90vh] overflow-y-auto rounded-[24px]">
        {children}
      </div>
    </div>
  );
}
