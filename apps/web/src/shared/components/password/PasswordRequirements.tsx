import { AlertCircle, Check, X } from 'lucide-react';
import { usePasswordValidation } from '@/shared/hooks/usePasswordValidation';

interface PasswordRequirementsProps {
  password: string;
}

interface RequirementItemProps {
  isValid: boolean;
  text: string;
}

function RequirementItem({ isValid, text }: RequirementItemProps) {
  return (
    <div className="flex gap-3 items-start w-full">
      <div
        className={`relative rounded-full shrink-0 size-5 flex items-center justify-center mt-0.5 ${
          isValid ? 'bg-success' : 'bg-danger-light'
        }`}
      >
        {isValid ? (
          <Check size={14} strokeWidth={2.5} className="text-white" />
        ) : (
          <X size={14} strokeWidth={2.5} className="text-danger" />
        )}
      </div>
      <p
        className={`font-['Inter'] leading-5 text-sm ${
          isValid ? 'font-medium text-success' : 'font-normal text-danger'
        }`}
      >
        {text}
      </p>
    </div>
  );
}

/**
 * Checklist de requisitos de senha — movido para shared/components/ui porque
 * é regra de negócio genérica de senha, não exclusiva da tela de login.
 * Reutilizável em "esqueceu senha", "primeiro acesso" e qualquer outro fluxo
 * que peça criação/alteração de senha.
 *
 * Antes usava ícones SVG desenhados manualmente e cores hex soltas
 * (#EE2B47, #00c950, #ffe2e2...); agora usa lucide-react (já padrão no
 * restante do projeto) e os tokens de shared/tailwind.css.
 *
 * Nota de implementação: o fundo original tinha um gradiente sutil
 * (linear-gradient 249,250,251 → 243,244,246) sem token equivalente. Optei
 * por simplificar para bg-surface-alt / dark:bg-surface-muted, o que também
 * dá suporte a dark mode que o componente não tinha antes. Se o gradiente
 * for importante visualmente, pode virar um novo token depois.
 */
export function PasswordRequirements({ password }: PasswordRequirementsProps) {
  const { hasMinLength, hasUpperAndLower, hasSpecialChar, hasNumber } = usePasswordValidation(password);

  return (
    <div className="rounded-2xl w-full bg-surface-alt dark:bg-surface-muted">
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <AlertCircle size={20} className="text-danger" />
          <p className="font-['Inter'] font-semibold text-ink text-sm">A senha deve ter:</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <RequirementItem isValid={hasMinLength} text="No mínimo 8 caracteres" />
          <RequirementItem isValid={hasUpperAndLower} text="Uma letra maiúscula e uma minúscula" />
          <RequirementItem isValid={hasSpecialChar} text="Um caractere especial (ex.: #,$,%,&,@)" />
          <RequirementItem isValid={hasNumber} text="Um número (ex.: 1,2,3)" />
        </div>
      </div>
    </div>
  );
}
