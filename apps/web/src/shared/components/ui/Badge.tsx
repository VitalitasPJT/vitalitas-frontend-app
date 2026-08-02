import type { ReactNode } from "react";

type BadgeVariant = "brand" | "success" | "neutral" | "danger";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

/*
  dark:text-white nos variantes coloridos: no claro, bg claro + texto colorido
  já tem bom contraste de luminância. No escuro, o fundo (bg-*-light) virou
  sólido/escuro (ver tailwind.css) — texto branco por cima garante contraste
  alto que não depende de percepção de matiz, então funciona bem pra
  daltônicos também. "neutral" não muda: já é cinza sobre cinza, sem
  ambiguidade de matiz.
*/
const variantClasses: Record<BadgeVariant, string> = {
  brand: "bg-brand-light text-brand dark:text-white",
  success: "bg-success-light text-success dark:text-white",
  neutral: "bg-surface-muted text-body",
  danger: "bg-danger-light text-danger dark:text-white",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-4 py-2 text-[13px]",
};

export function Badge({ children, variant = "brand", size = "md", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
