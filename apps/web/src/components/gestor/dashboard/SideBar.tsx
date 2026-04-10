import { Users, DollarSign, FileText, Activity, Video, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import imgProfile from "../../../assets/imgs/yuri.png";

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: Users, label: 'Usuários', active: true },
  { icon: DollarSign, label: 'Financeiro' },
  { icon: FileText, label: 'Contratos' },
  { icon: Activity, label: 'Atividades' },
  { icon: Video, label: 'Vídeos Institucionais' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`
        hidden lg:flex sticky top-0 left-0 h-screen bg-white border-r border-[#e4e4e7] z-40
        flex-col transition-all duration-500 ease-in-out
        ${isCollapsed ? 'w-[72px]' : 'w-[287px]'}
      `}
    >
      {/* ── User Profile ── */}
      <div className={`
        px-3 py-4 border-b border-[#f4f4f5]
        flex flex-col items-center gap-2
        ${!isCollapsed ? 'lg:flex-row lg:gap-3' : ''}
      `}>
        {/* Foto */}
        <div className="relative shrink-0">
          <img
            src={imgProfile}
            alt="Iuri Guimarães"
            className="size-12 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="absolute bottom-0 right-0 size-4 bg-[#00c950] border-2 border-white rounded-full" />
        </div>

        {/* Nome e cargo */}
        <div className={`
          text-center lg:text-left flex-1 min-w-0 transition-all duration-200
          ${isCollapsed ? 'opacity-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100'}
        `}>
          <h2 className="font-semibold text-[15px] text-[#18181b] tracking-[-0.375px] truncate">
            Iuri Guimarães
          </h2>
          <p className="font-medium text-xs text-[#71717b] tracking-[0.3px] uppercase">
            Gestor
          </p>
        </div>

        {/* Seta colapsar */}
        {!isCollapsed && (
          <button
            onClick={() => setIsCollapsed(true)}
            className="shrink-0 size-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Colapsar menu"
          >
            <ChevronRight className="size-5 text-black/50" />
          </button>
        )}
      </div>

      {/* Botão expandir — só quando collapsed */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="mx-auto mt-3 size-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer rotate-180"
          aria-label="Expandir menu"
        >
          <ChevronRight className="size-5 text-black/50" />
        </button>
      )}

      {/* ── Navigation ── */}
      <nav className="flex-1 px-2 pt-4 pb-4 space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              title={isCollapsed ? item.label : undefined}
              className={`
                w-full flex items-center gap-3 rounded-[14px] transition-colors relative cursor-pointer py-3.5
                ${item.active ? 'bg-[#fff1f2] border border-[#ffe4e6]' : 'hover:bg-gray-100'}
                ${isCollapsed ? 'justify-center px-0' : 'px-3'}
              `}
            >
              {item.active && (
                <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-[22px] bg-[#ff2056] rounded-r-lg" />
              )}
              <div className={`size-7 rounded-[10px] flex items-center justify-center shrink-0 ${item.active ? 'bg-[rgba(255,228,230,0.5)]' : ''}`}>
                <Icon className={`size-5 ${item.active ? 'text-[#c70036]' : 'text-[#ee2b47]'}`} />
              </div>
              <span className={`
                text-sm whitespace-nowrap transition-all duration-200
                ${item.active ? 'font-semibold text-[#c70036]' : 'font-medium text-[#52525c]'}
                ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
              `}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ── Account Section ── */}
      <div className="px-2 pb-6">
        {!isCollapsed && (
          <p className="px-3 mb-2 text-[11px] font-semibold text-black tracking-[0.55px] uppercase">
            Conta
          </p>
        )}
        <div className="space-y-1">
          <button
            title={isCollapsed ? 'Configurações' : undefined}
            className={`w-full flex items-center gap-3 py-3 rounded-[14px] hover:bg-gray-100 transition-colors cursor-pointer ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
          >
            <Settings className="size-5 text-black shrink-0" />
            <span className={`text-[13px] font-medium text-[#52525c] whitespace-nowrap transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Configurações
            </span>
          </button>
          <button
            title={isCollapsed ? 'Logout' : undefined}
            className={`w-full flex items-center gap-3 py-3 rounded-[14px] hover:bg-gray-100 transition-colors cursor-pointer ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
          >
            <LogOut className="size-5 text-black shrink-0" />
            <span className={`text-[13px] font-medium text-[#52525c] whitespace-nowrap transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}