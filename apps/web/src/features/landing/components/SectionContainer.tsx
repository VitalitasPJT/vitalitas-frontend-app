import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  /** Classes extras aplicadas no container interno (ex: margens específicas da seção) */
  className?: string;
  /**
   * Largura máxima do conteúdo. A maioria das seções usa "7xl" (1280px);
   * o AboutSection usa "1400" para acomodar os cards de time lado a lado.
   */
  maxWidth?: "7xl" | "1400";
}

/**
 * Padroniza o wrapper `max-w-* mx-auto px-8 lg:px-24` repetido em quase
 * toda seção da landing. O `<section>` externo (background, id, padding
 * vertical) continua sendo responsabilidade de cada seção, já que isso
 * varia por seção.
 */
export function SectionContainer({ children, className = "", maxWidth = "7xl" }: SectionContainerProps) {
  const maxWidthClass = maxWidth === "1400" ? "max-w-[1400px]" : "max-w-7xl";

  return (
    <div className={`${maxWidthClass} mx-auto px-8 lg:px-24 ${className}`.trim()}>
      {children}
    </div>
  );
}
