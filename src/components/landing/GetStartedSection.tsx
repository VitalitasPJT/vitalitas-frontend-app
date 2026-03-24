export function GetStartedSection() {
  return (
    <section className="bg-[#0d0d0d] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-6">
          Pronto para começar?
        </h2>
        <p className="text-[18px] text-[#9b9b9b] mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforme a gestão da sua academia e ofereça a melhor experiência para seus alunos. Comece hoje mesmo com o Vitalitas.
        </p>

        {/* Form */}
        <div className="bg-white rounded-[16px] p-8 lg:p-12 max-w-md mx-auto">
          <h3 className="text-[24px] font-bold text-[#0d0d0d] mb-6">
            Solicite uma demonstração
          </h3>
          
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[8px] text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#e8001c] transition-colors"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="E-mail profissional"
                className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[8px] text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#e8001c] transition-colors"
              />
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[8px] text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#e8001c] transition-colors"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Nome da academia"
                className="w-full px-4 py-3 border border-[#e5e5e5] rounded-[8px] text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:border-[#e8001c] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e8001c] px-8 py-4 rounded-[10px] text-[16px] font-semibold text-white hover:bg-[#c50017] transition-colors mt-6"
            >
              Agendar demonstração gratuita
            </button>
          </form>

          <p className="text-[12px] text-[#9b9b9b] mt-6">
            Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
