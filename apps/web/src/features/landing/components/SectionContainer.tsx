import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  /** Classes extras aplicadas no container interno (ex: margens específicas da seção) */
  className?: string;
  /**
   * Largura máxima do conteúdo. A maioria das seções usa "7xl" (1280px);
   * o AboutSection usa "1400" para acomodar os cards de time lado a lado.
   * Acima de 1920px, a classe `landing-container` (definida em
   * LandingPage.css) amplia isso para 1800px, para não sobrar espaço em
   * branco enorme em telas ultra-largas.
   */
  maxWidth?: "7xl" | "1400";
}

export function SectionContainer({ children, className = "", maxWidth = "7xl" }: SectionContainerProps) {
  const maxWidthClass = maxWidth === "1400" ? "max-w-[1400px]" : "max-w-7xl";

  return (
    <div className={`landing-container ${maxWidthClass} mx-auto px-8 lg:px-24 ${className}`.trim()}>
      {children}
    </div>
  );
}
