import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/imgs/logo_loginPage.png";
import errorImage from "../../assets/imgs/errorImage.png";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type ErrorCode = "404" | "500" | "401" | "403";

interface ErrorInfo {
  title: string;
  subtitle: string;
  desc: string;
  primaryLabel: string;
  secondaryLabel?: string;
  primaryAction: "back" | "dashboard" | "login" | "reload";
  secondaryAction?: "back" | "dashboard" | "login";
}

const ERROR_INFO: Record<ErrorCode, ErrorInfo> = {
  "404": {
    title: "404",
    subtitle: "Página não encontrada",
    desc: "A página que você está procurando não existe ou foi movida.",
    primaryLabel: "Voltar",
    secondaryLabel: "Ir para o início",
    primaryAction: "back",
    secondaryAction: "dashboard",
  },
  "403": {
    title: "403",
    subtitle: "Acesso negado",
    desc: "Você não tem permissão para acessar esta página. Verifique se está usando o perfil correto.",
    primaryLabel: "Voltar",
    secondaryLabel: "Ir para o início",
    primaryAction: "back",
    secondaryAction: "dashboard",
  },
  "401": {
    title: "401",
    subtitle: "Não autorizado",
    desc: "Sua sessão expirou ou você não está autenticado. Faça login para continuar.",
    primaryLabel: "Ir para o Login",
    primaryAction: "login",
  },
  "500": {
    title: "500",
    subtitle: "Erro interno do servidor",
    desc: "Algo deu errado no servidor. Tente novamente em alguns instantes.",
    primaryLabel: "Tentar novamente",
    secondaryLabel: "Voltar",
    primaryAction: "reload",
    secondaryAction: "back",
  },
};

const DASHBOARD_BY_ROLE: Record<string, string> = {
  Gestor:        "/user/gestor",
  Instrutor:     "/user/instrutor",
  Aluno:         "/user/aluno",
  Administrador: "/user/admin",
};

// ─── Componente ───────────────────────────────────────────────────────────────

export default function ErrorPage() {
  const { code } = useParams<{ code?: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const errorCode: ErrorCode =
    code && ["404", "500", "401", "403"].includes(code)
      ? (code as ErrorCode)
      : "404";

  const info = ERROR_INFO[errorCode];

  const dashboardRoute =
    isAuthenticated && user?.TipoUsuario
      ? DASHBOARD_BY_ROLE[user.TipoUsuario] ?? "/"
      : "/";

  function handleAction(action: "back" | "dashboard" | "login" | "reload") {
    switch (action) {
      case "back":
        window.history.length > 1 ? navigate(-1) : navigate(dashboardRoute);
        break;
      case "dashboard":
        navigate(dashboardRoute);
        break;
      case "login":
        navigate("/vitalitas/user/login");
        break;
      case "reload":
        window.location.reload();
        break;
    }
  }

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col md:flex-row">

        {/* ── Lado esquerdo — conteúdo ── */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-12 md:px-20 lg:px-32 gap-8 py-12 md:py-0">

          {/* Logo */}
          <img src={logo} alt="Logo Vitalitas" className="w-36 md:w-44" />

          {/* Código de erro */}
          <div className="flex flex-col gap-2">
            <span className="text-[120px] md:text-[160px] lg:text-[180px] font-extrabold text-[#ee2b47] leading-none">
              {info.title}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#18181b]">
              {info.subtitle}
            </h1>
          </div>

          {/* Descrição */}
          <p className="text-base md:text-lg text-[#71717b] max-w-md leading-relaxed">
            {info.desc}
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleAction(info.primaryAction)}
              className="px-8 py-3 bg-[#ee2b47] text-white text-base font-semibold rounded-xl
                shadow-[0px_6px_20px_rgba(238,43,71,0.35)]
                hover:bg-[#d9273f] active:scale-95 transition-all"
            >
              {info.primaryLabel}
            </button>

            {info.secondaryLabel && info.secondaryAction && (
              <button
                onClick={() => handleAction(info.secondaryAction!)}
                className="px-8 py-3 bg-white text-[#18181b] text-base font-semibold rounded-xl
                  border border-[rgba(0,0,0,0.12)]
                  hover:bg-gray-50 active:scale-95 transition-all"
              >
                {info.secondaryLabel}
              </button>
            )}
          </div>
        </div>

        {/* ── Lado direito — ilustração ── */}
        <div className="flex-1 flex items-center justify-center bg-[#fafafa] p-12 md:p-16">
          <img
            src={errorImage}
            alt="Ilustração de erro"
            className="w-full max-w-[320px] md:max-w-[440px] lg:max-w-[520px] object-contain"
          />
        </div>

      </div>
    </div>
  );
}