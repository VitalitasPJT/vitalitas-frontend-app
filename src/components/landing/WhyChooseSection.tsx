export function WhyChooseSection() {
  const reasons = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#FFF0F2"/>
          <path d="M24 16V28M18 22L24 28L30 22" stroke="#E8001C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Tudo em um só lugar",
      description: "Não precisa mais ficar alternando entre cinco ferramentas. Vitalitas centraliza toda a gestão."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#FFF0F2"/>
          <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" stroke="#E8001C" strokeWidth="2"/>
          <path d="M24 20V24L27 27" stroke="#E8001C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Mais tempo para o que importa",
      description: "Automatize tarefas operacionais e foque no que realmente importa: atender bem seus alunos."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#FFF0F2"/>
          <path d="M24 16L28 20L24 24L20 20L24 16Z" fill="#E8001C"/>
          <path d="M16 24L20 28L24 24L20 20L16 24Z" fill="#E8001C" opacity="0.6"/>
          <path d="M32 24L28 28L24 24L28 20L32 24Z" fill="#E8001C" opacity="0.6"/>
          <path d="M24 32L28 28L24 24L20 28L24 32Z" fill="#E8001C" opacity="0.3"/>
        </svg>
      ),
      title: "Experiência conectada",
      description: "Gestor e aluno vivem uma experiência fluida, moderna e conectada — do primeiro contato ao treino diário."
    }
  ];

  return (
    <section className="bg-[#f9fafb] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-[#0d0d0d] mb-4">
            Por que escolher o Vitalitas?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-[20px] font-bold text-[#0d0d0d] mb-3">
                {reason.title}
              </h3>
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
