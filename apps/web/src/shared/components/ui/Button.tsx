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
  primary: "bg-brand text-white hover:bg-brand-hover",
  secondary: "bg-surface-alt border border-border text-ink hover:bg-surface-muted",
  outline: "border border-ink text-ink hover:bg-ink hover:text-surface",
  "outline-light": "border border-white text-white hover:bg-white/10",
  ghost: "text-ink hover:text-brand",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[14px] rounded-[8px] gap-1.5",
  md: "px-6 py-2.5 text-[15px] rounded-[10px] gap-2",
  // lg cresce um pouco em telas grandes (usado nos CTAs principais: Hero,
  // GetStarted, WhyChoose) — sem exagerar, só o suficiente pra não ficar
  // desproporcional ao lado de um título que também cresceu com clamp().
  lg: "px-[clamp(1.5rem,2vw,2.25rem)] py-[clamp(0.75rem,1vw,1rem)] text-[clamp(15px,1vw,17px)] rounded-[10px] gap-2",
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
