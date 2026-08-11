import type { ReactNode } from "react";

type IconBadgeSize = "md" | "lg";
type IconBadgeTone = "brand" | "success" | "danger";

interface IconBadgeProps {
  icon: ReactNode;
  size?: IconBadgeSize;
  /** Override completo das classes de tamanho — útil para casos responsivos
   *  (ex.: "size-14 sm:size-16"). Se fornecido, ignora `size`. */
  sizeClassName?: string;
  tone?: IconBadgeTone;
  className?: string;
}

const sizeClasses: Record<IconBadgeSize, string> = {
  md: "size-14",
  lg: "size-16",
};

const toneClasses: Record<IconBadgeTone, string> = {
  brand: "bg-brand",
  success: "bg-success",
  danger: "bg-danger",
};

/**
 * Círculo com ícone centralizado, usado em cabeçalhos de modal/página.
 * Antes de existir, três telas reimplementavam esse círculo cada uma do seu
 * jeito: PasswordResetContent (bg-brand sólido), PasswordRecoverModal
 * (bg-brand sólido) e PasswordFirstAccess (gradiente custom
 * from-red-500 to-red-700, diferente das outras duas). Consolidado aqui —
 * mesmo espírito do Avatar.tsx, que já resolve o problema equivalente para
 * fotos de perfil.
 */
export function IconBadge({ icon, size = "lg", sizeClassName, tone = "brand", className = "" }: IconBadgeProps) {
  const resolvedSize = sizeClassName ?? sizeClasses[size];

  return (
    <div
      className={`rounded-full flex items-center justify-center shrink-0 ${toneClasses[tone]} ${resolvedSize} ${className}`.trim()}
    >
      {icon}
    </div>
  );
}
