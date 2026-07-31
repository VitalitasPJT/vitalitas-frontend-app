import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  // CTA principal sólido — Hero "Contratar o Vitalitas", WhyChoose "Contrate agora!", etc.
  primary: "bg-brand text-white hover:bg-brand-hover",
  // Botão secundário claro — Step1 "Cancelar". Usa tokens (não gray-50/gray-200
  // fixos), então também funciona no modo escuro.
  secondary: "bg-surface-alt border border-border text-ink hover:bg-surface-muted",
  // Outline escuro sobre fundo claro — Header "Acessar plataforma".
  // hover:text-surface (não hover:text-white fixo!) inverte certo nos dois temas:
  // no claro vira texto branco sobre fundo escuro; no escuro vira texto escuro
  // sobre fundo claro — sem isso o hover ficaria ilegível no modo escuro.
  outline: "border border-ink text-ink hover:bg-ink hover:text-surface",
  // Outline claro sobre fundo escuro — GetStartedSection "Fale com nosso suporte".
  // Fica sempre sobre um fundo intencionalmente escuro (o gradiente do
  // GetStartedSection não muda com o tema), então branco fixo está certo aqui.
  "outline-light": "border border-white text-white hover:bg-white/10",
  // Sem fundo/borda — Hero "Ver como funciona"
  ghost: "text-ink hover:text-brand",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[14px] rounded-[8px] gap-1.5",
  md: "px-6 py-2.5 text-[15px] rounded-[10px] gap-2",
  lg: "px-8 py-3.5 text-[16px] rounded-[10px] gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-semibold
        transition-colors cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...rest}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
