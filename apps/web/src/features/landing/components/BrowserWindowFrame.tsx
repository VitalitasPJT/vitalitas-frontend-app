import type { ReactNode } from "react";

interface BrowserWindowFrameProps {
  url: string;
  children: ReactNode;
  variant?: "light" | "medium";
  className?: string;
}

/**
 * O "chrome" da janela (dots + barra de URL) reage ao tema do site via
 * tokens. O conteúdo passado em `children` (o print/mockup do produto)
 * propositalmente NÃO usa tokens — ele representa a interface do produto
 * em si, que deve continuar com a aparência própria dela independente do
 * tema que o visitante escolheu pro site.
 */
export function BrowserWindowFrame({ url, children, variant = "light", className = "" }: BrowserWindowFrameProps) {
  const headerBg = variant === "medium" ? "bg-chrome" : "bg-surface-muted";
  const urlBarBg = variant === "medium" ? "bg-section-alt" : "bg-surface";

  return (
    <div className={`bg-surface rounded-[16px] overflow-hidden ${className}`.trim()}>
      <div className={`${headerBg} h-[44px] flex items-center px-4 gap-3`}>
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className={`${urlBarBg} px-3 py-1.5 rounded flex-1 max-w-md`}>
          <span className="text-[12px] text-body truncate block">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
