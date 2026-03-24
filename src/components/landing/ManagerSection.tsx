import svgPaths from "../../imports/svg-30hlfm6d6z";
import imgContainer1 from "../../assets/imgs/imgContainerUsers.png";

export function ManagerSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d={svgPaths.p2ba0dca0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Gestão financeira integrada",
      description: "Cobranças automáticas, controle de inadimplência e fluxo de caixa em tempo real."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p1d820380} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d={svgPaths.p161d4800} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d={svgPaths.p2981fe00} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d={svgPaths.p13e20900} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Matrículas e cadastros",
      description: "Ficha completa de cada aluno, planos, documentos e histórico em um só lugar."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p36c5af80} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 17V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 17V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 17V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Relatórios e retenção",
      description: "Identifique alunos em risco de cancelamento antes que eles saiam."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p1023c700} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Comunicação integrada",
      description: "Notificações, avisos e mensagens direto pelo app, sem depender de WhatsApp."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="text-[13px] font-medium text-[#e8001c] tracking-[1.3px] uppercase mb-6">
              PARA O GESTOR
            </p>
            <h2 className="text-[36px] font-bold text-[#0d0d0d] leading-tight mb-6">
              Controle total da sua academia
            </h2>
            <p className="text-[16px] text-[#6b6b6b] leading-relaxed mb-12">
              Chega de planilhas e sistemas separados. O Vitalitas centraliza a gestão financeira, operacional e de comunicação da sua academia.
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

          {/* Right Content - Dashboard Image */}
          <div className="relative">
            <div className="bg-white rounded-[16px] shadow-[0px_0px_14.9px_0px_rgba(0,0,0,0.62)] overflow-hidden">
              {/* Browser Header */}
              <div className="bg-[#b1b1b1] h-[40px] flex items-center px-4 gap-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="bg-[#e5e5e5] px-3 py-1 rounded flex-1 max-w-md">
                  <span className="text-[11px] text-[#6b6b6b]">app.vitalitas.com.br/dashboard</span>
                </div>
              </div>

              {/* Dashboard Image */}
              <div className="relative w-full h-[320px]">
                <img src={imgContainer1} alt="Dashboard" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
