import svgPaths from "../../../imports/svg-59b1zfc4li";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
      {/* Título e Subtítulo */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[30px] font-medium leading-9 text-[#0a0a0a]">
          Gestão de Usuários
        </h1>
        <p className="text-base text-[#6a7282]">
          Gerencie todos os membros da academia
        </p>
      </div>

      {/* Botões */}
      <div className="flex gap-3 flex-wrap">
        <button className="bg-white h-9 px-4 py-2 rounded-lg border border-[rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d={svgPaths.p23ad1400}
              stroke="#0A0A0A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p19411800}
              stroke="#0A0A0A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d="M8 10V2"
              stroke="#0A0A0A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
          <span className="text-sm font-medium text-[#0a0a0a]">Exportar</span>
        </button>

        <button className="bg-[#ee2b47] h-9 px-4 py-2 rounded-lg border border-[rgba(0,0,0,0.1)] shadow-[0px_0px_7px_1px_rgba(0,0,0,0.4)] flex items-center gap-2 hover:bg-[#d9273f] transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d={svgPaths.p32887f80}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p3694d280}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d="M12.6667 5.33333V9.33333"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d="M14.6667 7.33333H10.6667"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
          <Link
              to="/criar-usuario"
              className="text-sm font-bold text-white"
            >
              Criar novo usuário
          </Link>
        </button>
      </div>
    </div>
  );
}
