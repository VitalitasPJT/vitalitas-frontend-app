import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type FeedbackVariant = "error" | "success";

interface FormFeedbackMessageProps {
  variant: FeedbackVariant;
  children: ReactNode;
  /** true = caixa com fundo e borda (toast). false = linha simples com ícone. */
  boxed?: boolean;
}

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
};

/**
 * Mensagem de feedback de formulário (erro ou sucesso). Cobre tanto o
 * padrão "linha simples com ícone" (erro de submit em PasswordResetContent
 * e PasswordFirstAccess) quanto o padrão "toast em caixa" (sucesso em
 * PasswordFirstAccess). Antes cada tela desenhava o próprio ícone SVG e
 * cores hex/Tailwind soltas para isso — inclusive com ícones diferentes
 * para o mesmo tipo de mensagem (X num lugar, AlertCircle em outro).
 */
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
