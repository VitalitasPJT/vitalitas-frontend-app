import svgPaths from "@/shared/assets/icons/links/svg-30hlfm6d6z";
import imgContainer1 from "@/shared/assets/imgs/imgContainerUsers.png";
import { useState } from "react";
import { SectionContainer } from "./SectionContainer";
import { SectionEyebrow } from "./SectionEyebrow";
import { FeatureList, type FeatureItem } from "./FeatureList";
import { BrowserWindowFrame } from "./BrowserWindowFrame";

const managerFeatures: FeatureItem[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p2ba0dca0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Gestão financeira integrada",
    description: "Cobranças automáticas, controle de inadimplência e fluxo de caixa em tempo real."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p1d820380} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p161d4800} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p2981fe00} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p13e20900} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Matrículas e cadastros",
    description: "Ficha completa de cada aluno, planos, documentos e histórico em um só lugar."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p36c5af80} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 17V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 17V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Relatórios e retenção",
    description: "Identifique alunos em risco de cancelamento antes que eles saiam."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p1023c700} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Comunicação integrada",
    description: "Notificações, avisos e mensagens direto pelo app, sem depender de WhatsApp."
  }
];

export function ManagerSection() {
  const [zoomAberto, setZoomAberto] = useState(false);

  return (
    <section id="funcionalidades" className="bg-surface py-[clamp(4rem,6vw,7rem)]">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="min-w-0">
            <SectionEyebrow className="mb-6">PARA O GESTOR</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink leading-tight mb-6">
              Controle total da sua academia
            </h2>
            <p className="text-[clamp(1rem,1.1vw,1rem)] text-body leading-relaxed mb-12 break-words">
              Chega de planilhas e sistemas separados. O Vitalitas centraliza a gestão financeira, operacional e de comunicação da sua academia.
            </p>

            <FeatureList features={managerFeatures} />
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative min-w-0">
            <BrowserWindowFrame
              url="app.vitalitas.com.br/admin_dashboard"
              variant="medium"
              className="shadow-[0px_0px_14.9px_0px_rgba(0,0,0,0.62)]"
            >
              <div className="relative w-full group cursor-zoom-in" onClick={() => setZoomAberto(true)}>
                <img src={imgContainer1} alt="Dashboard" className="w-full h-auto object-contain" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[13px] px-3 py-1.5 rounded-full">
                    Clique para ampliar
                  </span>
                </div>
              </div>
            </BrowserWindowFrame>
          </div>

          {/* Modal de zoom */}
          {zoomAberto && (
            <div
              className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 lg:p-12 cursor-zoom-out"
              onClick={() => setZoomAberto(false)}
            >
              <button
                aria-label="Fechar imagem ampliada"
                className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                onClick={() => setZoomAberto(false)}
              >
                ✕
              </button>

              <img
                src={imgContainer1}
                alt="Dashboard ampliado"
                className="max-w-full max-h-full object-contain rounded-[12px] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  );
}
