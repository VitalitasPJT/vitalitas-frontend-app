import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  /** Margens variam por seção (mb-4, mb-6, ou nenhuma dentro de um flex com gap) */
  className?: string;
}

/**
 * Rótulo pequeno em caixa alta usado no topo de várias seções
 * ("QUEM SOMOS", "PARA O GESTOR", "PARA O ALUNO", "O PRODUTO", "COMECE AGORA").
 * Antes, cada seção reescrevia essas mesmas classes manualmente.
 */
export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p className={`text-[13px] font-medium text-[#e8001c] tracking-[1.3px] uppercase ${className}`.trim()}>
      {children}
    </p>
  );
}
