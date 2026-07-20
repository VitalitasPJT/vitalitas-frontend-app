import svgPaths from "@/shared/assets/icons/links/svg-30hlfm6d6z";

export function GetStartedSection() {
  return (
    <section className="bg-gradient-to-b from-[#0d0d0d] to-[#1a0004] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-24 flex flex-col items-center text-center gap-6">

        <p className="text-[13px] font-medium text-[#e8001c] tracking-[1.3px] uppercase">
          COMECE AGORA
        </p>

        <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-tight max-w-3xl">
          Sua academia também precisa do Vitalitas
        </h2>

        <p className="text-[18px] text-[#9b9b9b] max-w-xl leading-relaxed">
          Fale com nosso time e descubra o plano ideal para o tamanho da sua academia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button className="bg-[#e8001c] hover:bg-[#c50017] transition-colors cursor-pointer px-8 py-4 rounded-[10px] text-[17px] font-semibold text-white flex items-center gap-2">
            Contratar o Vitalitas
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16667 10H15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d={svgPaths.p1ae0b780} stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="border border-white hover:bg-white/10 transition-colors cursor-pointer px-8 py-4 rounded-[10px] text-[17px] font-semibold text-white">
            Fale com nosso suporte
          </button>
        </div>

        <p className="text-[13px] text-[#6b6b6b] mt-2">
          Suporte incluso · Configuração assistida
        </p>

      </div>
    </section>
  );
}