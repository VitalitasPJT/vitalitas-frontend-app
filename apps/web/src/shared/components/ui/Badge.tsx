import type { ReactNode } from "react";

type BadgeVariant = "brand" | "success" | "neutral" | "danger";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  // Ex: badge "Plataforma de gestão..." no Hero, tags do TeamCard
  brand: "bg-brand-light text-brand",
  // Ex: status "Ativo", "Em dia", "Paga"
  success: "bg-success-light text-success",
  // Ex: tags neutras do AboutSection ("Tecnologia acessível"), badge "Canal exclusivo"
  neutral: "bg-surface-muted text-body",
  // Ex: status "Pendente"
  danger: "bg-danger-light text-danger",
};

const sizeClasses: Record<BadgeSize, string> = {
  // pills pequenos de status em listas (Ativo/Pendente/Em dia)
  sm: "px-2 py-0.5 text-[11px]",
  // badges maiores de destaque (Hero, WhyChoose)
  md: "px-4 py-2 text-[13px]",
};

/**
 * Badge/pill compartilhado. Cobre os status (Ativo/Pendente/Em dia/Paga)
 * espalhados em HeroSection, ProductShowcaseSection e StudentSection, e
 * os badges de destaque de HeroSection/WhyChooseSection/AboutSection —
 * hoje cada um com as próprias classes de bg/texto repetidas.
 *
 * Depende dos tokens de cor em docs/design-tokens.md.
 */
export function Badge({ children, variant = "brand", size = "md", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
