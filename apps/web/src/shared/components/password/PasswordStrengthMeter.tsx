import { usePasswordValidation } from '@/shared/hooks/usePasswordValidation';
import type { PasswordStrengthLevel } from '@/shared/hooks/usePasswordValidation';

interface PasswordStrengthMeterProps {
  password: string;
}

interface StrengthConfig {
  label: string;
  barClass: string;
  textClass: string;
  width: string;
}

// Não existe token "warning" no design system ainda (ver tailwind.css) —
// o amarelo do estado "média" ficou como valor pontual até um token existir.
const STRENGTH_CONFIG: Record<PasswordStrengthLevel, StrengthConfig> = {
  weak: { label: 'Fraca', barClass: 'bg-danger', textClass: 'text-danger', width: '33.33%' },
  medium: { label: 'Média', barClass: 'bg-[#eab308]', textClass: 'text-[#eab308]', width: '66%' },
  strong: { label: 'Forte', barClass: 'bg-success', textClass: 'text-success', width: '100%' },
};

/**
 * Medidor visual de força de senha — movido para shared/components/ui pelo
 * mesmo motivo de PasswordRequirements: reutilizável em qualquer fluxo de
 * senha. Antes calculava a força de forma independente da checklist de
 * requisitos (mesma lógica duplicada com nomes diferentes); agora consome
 * usePasswordValidation, então os dois componentes nunca podem divergir.
 */
export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const { strength } = usePasswordValidation(password);
  const config = STRENGTH_CONFIG[strength];

  return (
    <div className="flex flex-col gap-1.5 w-full mt-2">
      <div className="flex items-center justify-between">
        <p className="font-['Inter'] font-medium text-body text-xs">Força da senha</p>
        <p className={`font-['Inter'] font-bold text-xs ${config.textClass}`}>{config.label}</p>
      </div>
      <div className="bg-surface-muted h-2 rounded-full w-full">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${config.barClass}`}
          style={{ width: config.width }}
        />
      </div>
    </div>
  );
}
