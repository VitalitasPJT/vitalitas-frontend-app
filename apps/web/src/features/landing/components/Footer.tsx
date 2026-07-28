import imgLogoVitalitas from "@/shared/assets/imgs/logo_loginPage.png";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-8 lg:px-24 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={imgLogoVitalitas} alt="Vitalitas" className="w-8 h-8" />
              <span className="text-[20px] font-bold text-[#E8001C]">VITALITAS</span>
            </div>
            <p className="text-[14px] text-[#9b9b9b] leading-relaxed">
              Sua academia também precisa do Vitalitas
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-3">
              <li>
                <a href="#funcionalidades" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Atualizações
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#9b9b9b]">
            © 2026 Vitalitas. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
              Termos de uso
            </a>
            <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-[14px] text-[#9b9b9b] hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
