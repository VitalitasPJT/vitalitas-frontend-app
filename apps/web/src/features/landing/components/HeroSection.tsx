import svgPaths from "@/shared/assets/icons/links/svg-30hlfm6d6z";
import imgContainerSanderson from "@/shared/assets/imgs/sand.png";
import { SectionContainer } from "./SectionContainer";
import { BrowserWindowFrame } from "./BrowserWindowFrame";
import { Button } from "@/shared/components/ui/Button";
import { Badge } from "@/shared/components/ui/Badge";
import { Avatar } from "@/shared/components/ui/Avatar";
import { smoothScrollTo } from "@/shared/utils/smoothScroll";

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p1ae0b780} stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="bg-section-alt py-[clamp(4rem,6vw,7rem)]">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 min-w-0">
            <Badge variant="brand" size="md">
              Plataforma de gestão para academias
            </Badge>

            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight text-ink break-words">
              Sua <span className="text-danger">academia</span> conectada.{" "}
              <br />
              Seu <span className="text-danger">treino</span> elevado.
            </h1>

            <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-body leading-relaxed break-words">
              O Vitalitas é um ecossistema digital completo: sua academia ganha controle total da operação enquanto seus alunos vivem a melhor experiência de treino — tudo em uma única licença.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="6.66667" stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-medium text-body">Suporte incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="6.66667" stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-medium text-body">Onboarding assistido</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="6.66667" stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-medium text-body">Cancelamento a qualquer hora</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" icon={<ArrowRightIcon />}>
                Contratar o Vitalitas
              </Button>
              <Button
                variant="ghost"
                onClick={() => smoothScrollTo("produto")}
              >
                Ver como funciona
              </Button>
            </div>

            <p className="text-[12px] text-muted pt-2">
              Produto em lançamento — seja uma academia fundadora.
            </p>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative min-w-0">
            <BrowserWindowFrame
              url="app.vitalitas.com.br"
              variant="medium"
              className="shadow-[0px_24px_64px_0px_rgba(0,0,0,0.12)]"
            >
              <div className="bg-[#f9fafb] p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-3">
                    <p className="text-[11px] text-[#6b6b6b] mb-1">Total Alunos</p>
                    <p className="text-[18px] font-bold text-[#0d0d0d]">1,248</p>
                  </div>
                  <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-3">
                    <p className="text-[11px] text-[#6b6b6b] mb-1">Receita</p>
                    <p className="text-[18px] font-bold text-[#0d0d0d]">R$ 89k</p>
                  </div>
                </div>

                <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-3">
                  <p className="text-[12px] font-semibold text-[#0a0a0a] mb-3">Alunos Ativos</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar src={imgContainerSanderson} alt="Sanderson Machado" initials="SM" size="xs" />
                      <span className="text-[11px] font-medium text-[#0a0a0a] flex-1 min-w-0 truncate">Sanderson Machado</span>
                      <Badge variant="success" size="sm">Ativo</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar initials="IG" size="xs" />
                      <span className="text-[11px] font-medium text-[#0a0a0a] flex-1 min-w-0 truncate">Iuri Guimarães</span>
                      <Badge variant="success" size="sm">Ativo</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </BrowserWindowFrame>

            {/* Notification Popup */}
            <div className="absolute -bottom-8 -left-8 bg-surface rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-3 flex items-center gap-2 max-w-[260px]">
              <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-success"></div>
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-ink leading-tight break-words">Aluno confirmou presença no treino</p>
                <p className="text-[11px] text-body">Agora mesmo</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
