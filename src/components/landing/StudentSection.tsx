import svgPaths from "../../imports/svg-30hlfm6d6z";

export function StudentSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p28b1aae0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Treinos na palma da mão",
      description: "O aluno acessa sua ficha de treino, vídeos dos exercícios e progressão diretamente no celular."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d={svgPaths.p32f12c00} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Agendamento de avaliações",
      description: "O aluno agenda sua própria avaliação física sem precisar ligar ou mandar mensagem."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p1e533000} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Pagamento pelo app",
      description: "Mensalidade, pacotes e cobranças avulsas — o aluno paga direto pelo aplicativo, sem filas ou boletos perdidos."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p13253c0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 7H22V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Acompanhamento da evolução",
      description: "Gráficos de medidas, recordes pessoais e histórico de avaliações motivam o aluno a continuar."
    }
  ];

  return (
    <section className="bg-[#e5e5e5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Mobile Mockups */}
          <div className="relative flex justify-center lg:justify-start gap-8">
            {/* Phone 1 - Workout */}
            <div className="relative">
              <div className="bg-[#0d0d0d] rounded-[32px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-[6px] w-[148px]">
                <div className="bg-white rounded-[26px] overflow-hidden h-[283px] p-4">
                  <div className="space-y-3 pt-8">
                    {/* Workout Card 1 */}
                    <div className="bg-white border border-[rgba(170,170,170,0.67)] rounded-[10px] p-2">
                      <p className="text-[10px] font-semibold text-[#0d0d0d]">Supino Reto</p>
                      <p className="text-[8px] text-[#6b6b6b]">3x12 • 60kg</p>
                    </div>
                    {/* Workout Card 2 */}
                    <div className="bg-white border border-[rgba(170,170,170,0.67)] rounded-[10px] p-2">
                      <p className="text-[10px] font-semibold text-[#0d0d0d]">Leg Press</p>
                      <p className="text-[8px] text-[#6b6b6b]">3x12 • 120kg</p>
                    </div>
                    {/* Workout Card 3 */}
                    <div className="bg-white border border-[rgba(170,170,170,0.67)] rounded-[10px] p-2">
                      <p className="text-[10px] font-semibold text-[#0d0d0d]">Abdominal</p>
                      <p className="text-[8px] text-[#6b6b6b]">3x12 • 180kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 - Student Profile */}
            <div className="relative">
              <div className="bg-[#0d0d0d] rounded-[32px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-[6px] w-[148px]">
                <div className="bg-white rounded-[26px] overflow-hidden h-[283px]">
                  <div className="bg-[#f9fafb] p-3 h-full">
                    {/* Student Info */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-[40px] h-[40px] bg-[#e8001c] rounded-full flex items-center justify-center">
                        <span className="text-[12px] font-bold text-white">M</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#0a0a0a]">Maria Silva</p>
                        <p className="text-[8px] text-[#6b6b6b]">Aluna</p>
                      </div>
                    </div>

                    {/* Progress Chart */}
                    <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-3 mb-3">
                      <p className="text-[9px] text-[#6b6b6b] mb-2">Evolução</p>
                      <div className="flex items-end gap-1 h-[50px]">
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '40%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '55%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '45%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '70%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '65%'}}></div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-2">
                      <p className="text-[9px] text-[#6b6b6b] mb-1">Mensalidade</p>
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold text-[#0d0d0d]">R$ 149,90</p>
                        <span className="text-[9px] text-[#1a9e5a] bg-[#d4edda] px-2 py-1 rounded-full">Paga</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[13px] font-medium text-[#e8001c] tracking-[1.3px] uppercase mb-6">
              PARA O ALUNO
            </p>
            <h2 className="text-[36px] font-bold text-[#0d0d0d] leading-tight mb-6">
              Uma experiência que faz o aluno querer voltar
            </h2>
            <p className="text-[16px] text-[#6b6b6b] leading-relaxed mb-12">
              Quando o aluno tem uma boa experiência, ele renova. O app do Vitalitas transforma a rotina de treino em algo que o aluno realmente usa e aprecia.
            </p>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-semibold text-[#0d0d0d] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
