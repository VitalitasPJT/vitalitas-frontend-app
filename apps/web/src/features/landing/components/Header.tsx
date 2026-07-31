import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogoVitalitas from "@/shared/assets/imgs/logo_loginPage.png";
import { Button } from "@/shared/components/ui/Button";

export function Header() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-surface border-b border-border shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={imgLogoVitalitas} alt="Vitalitas" className="w-10 h-10" />
            {/* Antes era #EE2B47 — única ocorrência da marca fora do
                padrão #e8001c usado no resto do site. Agora usa o token. */}
            <span className="text-[24px] font-bold text-brand">VITALITAS</span>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {["#funcionalidades", "#alunos", "#sobre", "#planos", "#contato"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-[15px] font-medium text-ink hover:text-brand transition-colors"
              >
                {["Funcionalidades", "Para Alunos", "Quem Somos", "Planos", "Contato"][i]}
              </a>
            ))}
          </nav>

          {/* CTA Buttons desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" onClick={() => navigate("/vitalitas/user/login")}>
              Acessar plataforma
            </Button>
            <Button variant="primary">Contratar licença</Button>
          </div>

          {/* Hamburguer */}
          <button
            className="lg:hidden p-2 text-ink"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
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
          <div className="lg:hidden border-t border-border py-4 flex flex-col gap-4">
            {["#funcionalidades", "#alunos", "#sobre", "#planos", "#contato"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-[15px] font-medium text-ink hover:text-brand"
              >
                {["Funcionalidades", "Para Alunos", "Quem Somos", "Planos", "Contato"][i]}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="outline" fullWidth onClick={() => navigate("/vitalitas/user/login")}>
                Acessar plataforma
              </Button>
              <Button variant="primary" fullWidth>Contratar licença</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
