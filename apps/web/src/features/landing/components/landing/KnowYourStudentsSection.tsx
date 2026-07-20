export function KnowYourStudentsSection() {
  return (
    <section className="bg-[#e5e5e5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-[#0d0d0d] mb-6">
            Conheça melhor quem consome o Vitalitas
          </h2>
          <p className="text-[18px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
            O Vitalitas já está transformando a gestão de academias em todo o Brasil. Veja o que nossos clientes têm a dizer sobre a experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-[#f9fafb] rounded-[16px] p-8 border border-[#e5e5e5]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[18px] font-bold text-white">R</span>
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-[#0d0d0d]">Ricardo Santos</h4>
                <p className="text-[14px] text-[#6b6b6b]">Proprietário - FitZone Academia</p>
              </div>
            </div>
            <p className="text-[15px] text-[#6b6b6b] leading-relaxed italic">
              "Antes do Vitalitas, eu passava horas em planilhas. Agora, tenho relatórios em tempo real e consigo focar no que realmente importa: meus alunos."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#f9fafb] rounded-[16px] p-8 border border-[#e5e5e5]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[18px] font-bold text-white">J</span>
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-[#0d0d0d]">Juliana Oliveira</h4>
                <p className="text-[14px] text-[#6b6b6b]">Gestora - Power Gym</p>
              </div>
            </div>
            <p className="text-[15px] text-[#6b6b6b] leading-relaxed italic">
              "O app para os alunos foi um divisor de águas. A taxa de renovação aumentou 30% desde que implementamos o Vitalitas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
