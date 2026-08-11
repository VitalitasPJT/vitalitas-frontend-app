import type { ReactNode } from "react";
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from "lucide-react";

type FeedbackVariant = "error" | "success" | "warning" | "info";

interface FormFeedbackMessageProps {
  variant: FeedbackVariant;
  children: ReactNode;
  /** true = caixa com fundo e borda (toast). false = linha simples com ícone. */
  boxed?: boolean;
}

/**
 * Variantes warning/info adicionadas (antes só existia error/success).
 * Motivo: Step3.tsx (fluxo de criar usuário) tinha 3 caixas de aviso
 * manuais em div solta — amarela (revisar antes de confirmar), azul
 * (perfil ainda não suportado) e vermelha (erro) — só a vermelha tinha
 * componente compartilhado equivalente até agora.
 *
 * Não existem tokens warning/info em shared/tailwind.css ainda (mesma
 * situação já registrada em PasswordStrengthMeter.tsx pro amarelo de
 * "força média") — usando tons pontuais próximos aos que já apareciam
 * soltos no Step3.tsx original (yellow-700/50, blue-700/50), agora com
 * dark mode, que as divs manuais não tinham.
 */
const variantConfig: Record<FeedbackVariant, { icon: ReactNode; text: string; box: string }> = {
  error: {
    icon: <AlertCircle size={16} className="text-danger shrink-0" />,
    text: "text-danger",
    box: "bg-danger-light border border-danger/20",
  },
  success: {
    icon: <CheckCircle2 size={16} className="text-success shrink-0" />,
    text: "text-success",
    box: "bg-success-light border border-success/20",
  },
  warning: {
    icon: <AlertTriangle size={16} className="text-yellow-600 dark:text-[#eab308] shrink-0" />,
    text: "text-yellow-700 dark:text-[#eab308]",
    box: "bg-yellow-50 dark:bg-[rgba(234,179,8,0.15)] border border-yellow-200 dark:border-[rgba(234,179,8,0.3)]",
  },
  info: {
    icon: <Info size={16} className="text-blue-600 dark:text-[#3b82f6] shrink-0" />,
    text: "text-blue-700 dark:text-[#3b82f6]",
    box: "bg-blue-50 dark:bg-[rgba(59,130,246,0.15)] border border-blue-200 dark:border-[rgba(59,130,246,0.3)]",
  },
};

export function FormFeedbackMessage({ variant, children, boxed = false }: FormFeedbackMessageProps) {
  const config = variantConfig[variant];

  if (boxed) {
    return (
      <div className={`flex items-center gap-2 text-sm font-medium rounded-2xl px-4 py-3 ${config.text} ${config.box}`}>
        {config.icon}
        {children}
      </div>
    );
  }

  return (
    <p className={`text-sm flex items-center gap-1.5 ${config.text}`}>
      {config.icon}
      {children}
    </p>
  );
}
