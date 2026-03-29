import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogoVitalitas from "../../assets/imgs/logo_loginPage.png";

export function Header() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white border-b border-[#e5e5e5] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={imgLogoVitalitas} alt="Vitalitas" className="w-10 h-10" />
            <span className="text-[24px] font-bold text-[#EE2B47]">VITALITAS</span>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#funcionalidades" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47] transition-colors">Funcionalidades</a>
            <a href="#alunos" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47] transition-colors">Para Alunos</a>
            <a href="#sobre" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47] transition-colors">Quem Somos</a>
            <a href="#planos" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47] transition-colors">Planos</a>
            <a href="#contato" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47] transition-colors">Contato</a>
          </nav>

          {/* CTA Buttons desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => navigate("/vitalitas/user/login")} className="px-6 py-2.5 border border-[#0d0d0d] rounded-[10px] text-[15px] font-medium text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-colors cursor-pointer">
              Acessar plataforma
            </button>
            <button className="px-6 py-2.5 bg-[#EE2B47] rounded-[10px] text-[15px] font-medium text-white hover:bg-[#ff0000] transition-colors cursor-pointer">
              Contratar licença
            </button>
          </div>

          {/* Hamburguer */}
          <button className="lg:hidden p-2" onClick={() => setMenuAberto(!menuAberto)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuAberto ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <div className="lg:hidden border-t border-[#e5e5e5] py-4 flex flex-col gap-4">
            <a href="#funcionalidades" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47]">Funcionalidades</a>
            <a href="#alunos" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47]">Para Alunos</a>
            <a href="#sobre" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47]">Quem Somos</a>
            <a href="#planos" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47]">Planos</a>
            <a href="#contato" className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#EE2B47]">Contato</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-[#e5e5e5]">
              <button onClick={() => navigate("/vitalitas/user/login")} className="w-full px-6 py-2.5 border border-[#0d0d0d] rounded-[10px] text-[15px] font-medium text-[#0d0d0d]">
                Acessar plataforma
              </button>
              <button className="w-full px-6 py-2.5 bg-[#EE2B47] rounded-[10px] text-[15px] font-medium text-white">
                Contratar licença
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}