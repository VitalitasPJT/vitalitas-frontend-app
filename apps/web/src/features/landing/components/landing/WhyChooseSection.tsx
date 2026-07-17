export function WhyChooseSection() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.21 15L2.66 7.14C2.4638 6.80087 2.37153 6.41159 2.39464 6.02048C2.41775 5.62937 2.55523 5.25366 2.79 4.94L4.4 2.8C4.58629 2.55161 4.82786 2.35 5.10557 2.21115C5.38328 2.07229 5.68951 2 6 2H18C18.3105 2 18.6167 2.07229 18.8944 2.21115C19.1721 2.35 19.4137 2.55161 19.6 2.8L21.2 4.94C21.4363 5.25265 21.5756 5.62784 21.6005 6.01897C21.6254 6.4101 21.5348 6.79992 21.34 7.14L16.79 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 12L5.12 2.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 12L18.88 2.2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="17" r="5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V16H11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Planos acessíveis",
      description: "Licenciamento mensal sem surpresas. Escolha o plano que se encaixa no tamanho da sua academia e escale quando precisar.",
      badge: {
        text: "Vagas limitadas",
        color: "bg-[#fff0f2] text-[#e8001c]"
      }
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 14H6C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78929 14.9609 8 15.4696 8 16V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Configuração assistida",
      description: "Nossa equipe configura tudo: importação de alunos, personalização da plataforma e treinamento da equipe.",
      badge: {
        text: "Sem custo adicional",
        color: "bg-[#f0fff7] text-[#1a9e5a]"
      }
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 14C15.2 13 15.7 12.3 16.5 11.5C17.5 10.6 18 9.3 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.2 10.2 7.5 11.5C8.2 12.2 8.8 13 9 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 22H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Voz ativa no produto",
      description: "Academias fundadoras participam das decisões de novas funcionalidades. Seu feedback molda o roadmap.",
      badge: {
        text: "Canal exclusivo",
        color: "bg-[#f5f5f5] text-[#6b6b6b]"
      }
    }
  ];

  return (
    <section id="planos" className="bg-[#e5e5e5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold text-[#0d0d0d] mb-4">
            Por que escolher o Vitalitas?
          </h2>
          <p className="text-[18px] text-[#6b6b6b] max-w-2xl mx-auto">
            Tudo que sua academia precisa para crescer, em uma única licença.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-[16px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] border border-[rgba(170,170,170,0.67)] p-8 relative">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#e8001c] rounded-full flex items-center justify-center mb-8">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold text-[#0d0d0d] mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8">
                {benefit.description}
              </p>

              {/* Badge */}
              <div className={`inline-block px-4 py-2 rounded-full text-[13px] font-medium ${benefit.badge.color}`}>
                {benefit.badge.text}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#f9fafb] border border-[rgba(170,170,170,0.67)] rounded-[16px] px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#e8001c] rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.33333V14.6667M8 14.6667L13.3333 9.33333M8 14.6667L2.66667 9.33333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[14px] font-semibold text-[#0d0d0d]">Desconto especial para academias fundadoras</p>
                <p className="text-[12px] text-[#6b6b6b]">Garanta condições exclusivas por tempo limitado</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#e8001c] px-10 py-4 rounded-[10px] text-[16px] font-semibold text-white hover:bg-[#c50017] transition-colors cursor-pointer">
            Contrate agora!
          </button>
        </div>
      </div>
    </section>
  );
}
