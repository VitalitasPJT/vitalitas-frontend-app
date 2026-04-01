import { useState } from 'react';
import { Menu, X, Users, DollarSign, FileText, Activity, Video, Settings, LogOut } from 'lucide-react';
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

interface MobileHeaderProps {
  title: string;
}

export function MobileHeader({ title }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Header fixo no topo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e4e4e7] flex items-center justify-between px-4 h-14 shadow-sm">
        <h1 className="text-[15px] font-semibold text-[#18181b] truncate">{title}</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="size-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5 text-[#18181b]" /> : <Menu className="size-5 text-[#18181b]" />}
        </button>
      </header>

      {/* Spacer para não sobrepor conteúdo */}
      <div className="h-14" />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 top-14"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown */}
      <div
        className={`
          fixed top-14 left-0 right-0 z-40 bg-white border-b border-[#e4e4e7] shadow-lg
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {/* Perfil */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[#f4f4f5]">
          <div className="relative shrink-0">
            <img
              src={imgProfile}
              alt="Iuri Guimarães"
              className="size-10 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 size-3 bg-[#00c950] border-2 border-white rounded-full" />
          </div>
          <div>
            <p className="font-semibold text-[14px] text-[#18181b]">Iuri Guimarães</p>
            <p className="text-xs font-medium text-[#71717b] uppercase tracking-[0.3px]">Administrador</p>
          </div>
        </div>

        {/* Nav items */}
        <nav className="px-3 py-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => setIsOpen(false)}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-[12px] transition-colors relative cursor-pointer
                  ${item.active ? 'bg-[#fff1f2] border border-[#ffe4e6]' : 'hover:bg-gray-100'}
                `}
              >
                {item.active && (
                  <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-[18px] bg-[#ff2056] rounded-r-lg" />
                )}
                <div className={`size-7 rounded-[10px] flex items-center justify-center shrink-0 ${item.active ? 'bg-[rgba(255,228,230,0.5)]' : ''}`}>
                  <Icon className={`size-4 ${item.active ? 'text-[#c70036]' : 'text-[#ee2b47]'}`} />
                </div>
                <span className={`text-sm ${item.active ? 'font-semibold text-[#c70036]' : 'font-medium text-[#52525c]'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Conta */}
        <div className="px-3 pb-4 pt-1 border-t border-[#f4f4f5] space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-[12px] hover:bg-gray-100 transition-colors cursor-pointer">
            <Settings className="size-4 text-black shrink-0" />
            <span className="text-sm font-medium text-[#52525c]">Configurações</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-[12px] hover:bg-gray-100 transition-colors cursor-pointer">
            <LogOut className="size-4 text-black shrink-0" />
            <span className="text-sm font-medium text-[#52525c]">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}