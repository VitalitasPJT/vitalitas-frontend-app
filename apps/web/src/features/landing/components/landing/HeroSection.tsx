import svgPaths from "@/shared/assets/icons/links/svg-30hlfm6d6z";
import imgContainerSanderson from "@/shared/assets/imgs/sand.png";

export function HeroSection() {
  return (
    <section className="bg-[#e5e5e5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block bg-[#fff0f2] px-4 py-2 rounded-full">
              <span className="text-[13px] font-medium text-[#e8001c]">
                Plataforma de gestão para academias
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] lg:text-[56px] font-bold leading-tight">
              Sua <span className="text-[#ee2b47]">academia</span> conectada.{" "}
              <br />
              Seu <span className="text-[#ee2b47]">treino</span> elevado.
            </h1>

            {/* Description */}
            <p className="text-[18px] text-[#6b6b6b] leading-relaxed">
              O Vitalitas é um ecossistema digital completo: sua academia ganha controle total da operação enquanto seus alunos vivem a melhor experiência de treino — tudo em uma única licença.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 py-4 border-b border-[#e5e5e5]">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.66667" stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-medium text-[#6b6b6b]">Suporte incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.66667" stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-medium text-[#6b6b6b]">Onboarding assistido</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.66667" stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p17134c00} stroke="#1A9E5A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] font-medium text-[#6b6b6b]">Cancelamento a qualquer hora</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#e8001c] px-8 py-3 rounded-[10px] text-[16px] font-semibold text-white hover:bg-[#c50017] transition-colors flex items-center gap-2 cursor-pointer">
                Contratar o Vitalitas
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p1ae0b780} stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById("produto")?.scrollIntoView({ behavior: "smooth" })}
                className="text-[16px] font-medium text-[#0d0d0d] hover:text-[#e8001c] transition-colors cursor-pointer"
              >
                Ver como funciona
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-[12px] text-[#9b9b9b] pt-2">
              Produto em lançamento — seja uma academia fundadora.
            </p>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-[16px] shadow-[0px_24px_64px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              {/* Browser Header */}
              <div className="bg-[#b0b0b0] h-[45px] flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-[10.26px] h-[10.26px] rounded-full bg-[#ff5f57]"></div>
                  <div className="w-[10.26px] h-[10.26px] rounded-full bg-[#febc2e]"></div>
                  <div className="w-[10.26px] h-[10.26px] rounded-full bg-[#28c840]"></div>
                </div>
                <div className="ml-8 bg-[#e5e5e5] px-2 py-1 rounded flex-1 max-w-md">
                  <span className="text-[10px] text-[#6b6b6b]">app.vitalitas.com.br</span>
                </div>
              </div>

              {/* Dashboard Content */}
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
                      <img src={imgContainerSanderson} alt="Student" className="w-6 h-6 rounded-full" />
                      <span className="text-[11px] font-medium text-[#0a0a0a] flex-1">Sanderson Machado</span>
                      <span className="text-[10px] text-[#1a9e5a] bg-[#d4edda] px-2 py-1 rounded">Ativo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e8001c] flex items-center justify-center">
                        <span className="text-[10px] font-semibold text-white">IG</span>
                      </div>
                      <span className="text-[11px] font-medium text-[#0a0a0a] flex-1">Iuri Guimarães</span>
                      <span className="text-[10px] text-[#1a9e5a] bg-[#d4edda] px-2 py-1 rounded">Ativo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Popup */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-3 flex items-center gap-2 max-w-[260px]">
              <div className="w-8 h-8 rounded-full bg-[#d4edda] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#1a9e5a]"></div>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#0d0d0d] leading-tight">Aluno confirmou presença no treino</p>
                <p className="text-[11px] text-[#6b6b6b]">Agora mesmo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
