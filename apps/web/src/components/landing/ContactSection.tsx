import { useState } from 'react';
import svgPaths from '../../imports/svg-30hlfm6d6z';

export function ContactSection() {
  const [formData, setFormData] = useState({
    gymName: '',
    phone: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    //  adicionar a lógica de envio do formulário com backend de lider sanderson?
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="bg-[#e5e5e5] w-full min-h-screen py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading e Descrição */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] lg:text-[36px] leading-[1.2] text-[#0d0d0d] mb-4">
            Pronto para começar?
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] leading-[1.5] text-[#6b6b6b] max-w-[521px] mx-auto px-4">
            Preencha o formulário e nosso time entrará em contato para apresentar os planos e iniciar sua licença.
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-[16px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] p-8 md:p-12 max-w-[560px] mx-auto">
          <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[19.5px] text-[#6b6b6b] mb-4">
            Conecte-se agora!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome da academia */}
            <div>
              <input
                type="text"
                name="gymName"
                value={formData.gymName}
                onChange={handleChange}
                placeholder="Nome da academia"
                className="w-full h-[48px] px-4 rounded-[10px] border border-[rgba(170,170,170,0.67)] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#e8001c] focus:border-transparent"
              />
            </div>

            {/* N° de telefone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="N° de telefone"
                className="w-full h-[48px] px-4 rounded-[10px] border border-[rgba(170,170,170,0.67)] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#e8001c] focus:border-transparent"
              />
            </div>

            {/* Cidade / Estado */}
            <div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Cidade / Estado"
                className="w-full h-[48px] px-4 rounded-[10px] border border-[rgba(170,170,170,0.67)] font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#0d0d0d] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#e8001c] focus:border-transparent"
              />
            </div>

            {/* Botão de envio */}
            <button
              type="submit"
              className="w-full h-[52px] bg-[#e8001c] rounded-[10px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white flex items-center justify-center gap-2 hover:bg-[#c7001a] transition-colors mt-6 relative cursor-pointer"
            >
              <span>Enviar — nosso time entrará em contato</span>
              <svg className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
                <path d="M4.16667 10H15.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p1ae0b780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </button>

            {/* Texto de garantia */}
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9b9b9b] text-center mt-3">
              Retorno em até 24h.
            </p>
          </form>
        </div>

        {/* Features/Benefícios */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 px-4">
          {/* Seus dados estão seguros */}
          <div className="flex items-center gap-2">
            <div className="size-4 shrink-0">
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <g opacity="1">
                  <path d={svgPaths.p8326c00} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" transform="scale(0.75) translate(1.33, 1.33)" />
                </g>
              </svg>
            </div>
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[19.5px] text-[#6b6b6b] whitespace-nowrap">
              Seus dados estão seguros
            </span>
          </div>

          {/* Retorno em até 24h */}
          <div className="flex items-center gap-2">
            <div className="size-4 shrink-0">
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <g opacity="1">
                  <path d={svgPaths.p3d62dd80} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" transform="scale(0.75) translate(1.33, 1.33)" />
                  <path d={svgPaths.pf2f9980} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" transform="scale(0.75) translate(1.33, 1.33)" />
                </g>
              </svg>
            </div>
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[19.5px] text-[#6b6b6b] whitespace-nowrap">
              Retorno em até 24h
            </span>
          </div>

          {/* Sem spam, prometemos */}
          <div className="flex items-center gap-2">
            <div className="size-4 shrink-0">
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <g opacity="1">
                  <path d={svgPaths.p48af40} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" transform="scale(0.75) translate(2.67, 2.67)" />
                  <path d={svgPaths.p30908200} stroke="#6B6B6B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" transform="scale(0.75) translate(2.67, 2.67)" />
                </g>
              </svg>
            </div>
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[19.5px] text-[#6b6b6b] whitespace-nowrap">
              Sem spam, prometemos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
