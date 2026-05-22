import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogoVitalitas from "../../assets/imgs/logo_loginPage.png";

export function Header() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white dark:bg-[#09090b] border-b border-[#e5e5e5] dark:border-[rgba(255,255,255,0.08)] shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={imgLogoVitalitas} alt="Vitalitas" className="w-10 h-10" />
            <span className="text-[24px] font-bold text-[#EE2B47]">VITALITAS</span>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {["#funcionalidades", "#alunos", "#sobre", "#planos", "#contato"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-[15px] font-medium text-[#0d0d0d] dark:text-[#e4e4e7] hover:text-[#EE2B47] dark:hover:text-[#EE2B47] transition-colors"
              >
                {["Funcionalidades", "Para Alunos", "Quem Somos", "Planos", "Contato"][i]}
              </a>
            ))}
          </nav>

          {/* CTA Buttons desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate("/vitalitas/user/login")}
              className="px-6 py-2.5 border border-[#0d0d0d] dark:border-[#e4e4e7] rounded-[10px] text-[15px] font-medium text-[#0d0d0d] dark:text-[#e4e4e7] hover:bg-[#0d0d0d] dark:hover:bg-[#e4e4e7] hover:text-white dark:hover:text-[#09090b] transition-colors cursor-pointer"
            >
              Acessar plataforma
            </button>
            <button className="px-6 py-2.5 bg-[#EE2B47] rounded-[10px] text-[15px] font-medium text-white hover:bg-[#d9273f] transition-colors cursor-pointer">
              Contratar licença
            </button>
          </div>

          {/* Hamburguer */}
          <button
            className="lg:hidden p-2 text-[#0d0d0d] dark:text-[#e4e4e7]"
            onClick={() => setMenuAberto(!menuAberto)}
          >
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
          <div className="lg:hidden border-t border-[#e5e5e5] dark:border-[rgba(255,255,255,0.08)] py-4 flex flex-col gap-4">
            {["#funcionalidades", "#alunos", "#sobre", "#planos", "#contato"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-[15px] font-medium text-[#0d0d0d] dark:text-[#e4e4e7] hover:text-[#EE2B47]"
              >
                {["Funcionalidades", "Para Alunos", "Quem Somos", "Planos", "Contato"][i]}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-[#e5e5e5] dark:border-[rgba(255,255,255,0.08)]">
              <button
                onClick={() => navigate("/vitalitas/user/login")}
                className="w-full px-6 py-2.5 border border-[#0d0d0d] dark:border-[#e4e4e7] rounded-[10px] text-[15px] font-medium text-[#0d0d0d] dark:text-[#e4e4e7]"
              >
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
