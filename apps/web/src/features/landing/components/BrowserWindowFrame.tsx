import type { ReactNode } from "react";

interface BrowserWindowFrameProps {
  /** Texto exibido na barra de endereço (ex: "app.vitalitas.com.br/admin_dashboard") */
  url: string;
  children: ReactNode;
  /**
   * "light"  -> cabeçalho cinza-claro (#f5f5f5) com barra de URL branca.
   * "medium" -> cabeçalho cinza-médio (#b0b0b0) com barra de URL cinza-clara,
   *             como no preview do dashboard e no card do gestor.
   */
  variant?: "light" | "medium";
  /** Classes extras no container externo, tipicamente a box-shadow, que varia por seção */
  className?: string;
}

/**
 * Janela de navegador com os três dots (vermelho/amarelo/verde) e uma barra
 * de URL. Esse bloco era reescrito à mão em HeroSection, ManagerSection e
 * ProductShowcaseSection — cada um com pequenas variações de tamanho.
 *
 * Bônus de correção: em ManagerSection.tsx o cabeçalho existia mas os dots
 * nunca chegavam a ser renderizados (só havia um comentário "{/* browser
 * dots... *\/}" no lugar do markup) — ou seja, o preview do gestor estava
 * exibindo uma barra cinza vazia. Usar este componente corrige isso.
 */
export function BrowserWindowFrame({ url, children, variant = "light", className = "" }: BrowserWindowFrameProps) {
  const headerBg = variant === "medium" ? "bg-[#b0b0b0]" : "bg-[#f5f5f5]";
  const urlBarBg = variant === "medium" ? "bg-[#e5e5e5]" : "bg-white";

  return (
    <div className={`bg-white rounded-[16px] overflow-hidden ${className}`.trim()}>
      <div className={`${headerBg} h-[44px] flex items-center px-4 gap-3`}>
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className={`${urlBarBg} px-3 py-1.5 rounded flex-1 max-w-md`}>
          <span className="text-[12px] text-[#6b6b6b] truncate block">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
