import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  /**
   * Largura máxima do conteúdo em telas "normais" (até ~1920px).
   * A maioria das seções usa "7xl" (1280px); o AboutSection usa "1400"
   * para acomodar os cards de time lado a lado.
   */
  maxWidth?: "7xl" | "1400";
}

/**
 * Escada de breakpoints pra telas grandes, via variantes arbitrárias do
 * Tailwind (min-[Npx]:), sem precisar de CSS customizado com !important:
 *   - até 1920px  → maxWidth base (1280 ou 1400)
 *   - ≥1920px (Full HD) → mais largo
 *   - ≥2560px (2K/QHD)  → mais largo ainda
 *   - ≥3840px (4K)      → o mais largo
 * Isso substitui a abordagem anterior (classe .landing-container +
 * LandingPage.css) por algo nativo do Tailwind, mais fácil de ler direto
 * na classe do componente.
 */
const widthLadder: Record<"7xl" | "1400", string> = {
  "7xl": "max-w-7xl min-[1920px]:max-w-[1760px] min-[2560px]:max-w-[2200px] min-[3840px]:max-w-[3400px]",
  "1400": "max-w-[1400px] min-[1920px]:max-w-[1900px] min-[2560px]:max-w-[2300px] min-[3840px]:max-w-[3500px]",
};

export function SectionContainer({ children, className = "", maxWidth = "7xl" }: SectionContainerProps) {
  return (
    <div
      className={`${widthLadder[maxWidth]} mx-auto px-8 lg:px-24 min-[2560px]:px-32 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
