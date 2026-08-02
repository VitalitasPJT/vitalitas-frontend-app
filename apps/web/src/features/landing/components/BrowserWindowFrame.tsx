import type { ReactNode } from "react";

interface BrowserWindowFrameProps {
  url: string;
  children: ReactNode;
  variant?: "light" | "medium";
  className?: string;
}

/**
 * A largura desse componente já é fluida — herda 100% da coluna do grid
 * onde está (que por sua vez cresce com o SectionContainer). Só a altura
 * do cabeçalho e o texto da URL ganharam um clamp() leve, pra não ficarem
 * desproporcionalmente pequenos numa janela muito mais larga.
 */
export function BrowserWindowFrame({ url, children, variant = "light", className = "" }: BrowserWindowFrameProps) {
  const headerBg = variant === "medium" ? "bg-chrome" : "bg-surface-muted";
  const urlBarBg = variant === "medium" ? "bg-section-alt" : "bg-surface";

  return (
    <div className={`bg-surface rounded-[16px] overflow-hidden ${className}`.trim()}>
      <div className={`${headerBg} h-[clamp(44px,3vw,56px)] flex items-center px-4 gap-3`}>
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className={`${urlBarBg} px-3 py-1.5 rounded flex-1 max-w-md min-w-0`}>
          <span className="text-[clamp(12px,0.9vw,14px)] text-body truncate block">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
