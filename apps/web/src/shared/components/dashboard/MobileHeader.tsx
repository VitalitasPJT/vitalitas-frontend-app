import { useState } from 'react';
import { Menu, X, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import { ThemeToggle } from '@/shared/components/ui/ThemeToggle';
import { Avatar } from '@/shared/components/ui/Avatar';
import type { MenuItem, UserProfile } from './menuConfig';

interface MobileHeaderProps {
  title: string;
  menuItems: MenuItem[];
  user: UserProfile;
  activePath: string;
}

function getInitials(name: string): string {
  return name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();
}

export function MobileHeader({ title, menuItems, user, activePath }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleNavigate = (path: string) => { navigate(path); setIsOpen(false); };
  const handleLogout = () => { logout(); navigate('/vitalitas/user/login'); };

  return (
    <div className="lg:hidden">
      {/* Header fixo */}
      <header className="
        fixed top-0 left-0 right-0 z-50 h-14
        bg-white dark:bg-[#1c1c1f]
        border-b border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
        flex items-center justify-between px-4 shadow-sm
        transition-colors duration-300
      ">
        <h1 className="text-[15px] font-semibold text-[#18181b] dark:text-[#e4e4e7] truncate">{title}</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="size-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer"
        >
          {isOpen
            ? <X className="size-5 text-[#18181b] dark:text-[#e4e4e7]" />
            : <Menu className="size-5 text-[#18181b] dark:text-[#e4e4e7]" />}
        </button>
      </header>

      <div className="h-14" />

      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 top-14" onClick={() => setIsOpen(false)} />
      )}

      {/* Dropdown */}
      <div className={`
        fixed top-14 left-0 right-0 z-40
        bg-white dark:bg-[#1c1c1f]
        border-b border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
        shadow-lg transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        {/* Perfil */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#f4f4f5] dark:border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <Avatar
                initials={getInitials(user.name)}
                src={user.avatarUrl ?? undefined}
                alt={user.name}
                size="md"
                tone="brand"
                className="border-2 border-white dark:border-[#2c2c30] shadow-md"
              />
              <div className="absolute bottom-0 right-0 size-3 bg-[#00c950] border-2 border-white dark:border-[#1c1c1f] rounded-full" />
            </div>
            <div>
              <p className="font-semibold text-[14px] text-[#18181b] dark:text-[#e4e4e7]">{user.name}</p>
              <p className="text-xs font-medium text-[#71717b] dark:text-[#71717a] uppercase tracking-[0.3px]">{user.roleLabel}</p>
            </div>
          </div>
          <ThemeToggle variant="inline" />
        </div>

        {/* Nav */}
        <nav className="px-3 py-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.path;
            return (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.path)}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-[12px] transition-colors relative cursor-pointer
                  ${isActive
                    ? 'bg-[#fff1f2] dark:bg-[#2c1f20] border border-[#ffe4e6] dark:border-[#3d1f22]'
                    : 'hover:bg-gray-100 dark:hover:bg-[#2c2c30]'}
                `}
              >
                {isActive && <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-[18px] bg-[#ff2056] rounded-r-lg" />}
                <div className={`size-7 rounded-[10px] flex items-center justify-center shrink-0 ${isActive ? 'bg-[rgba(255,228,230,0.5)] dark:bg-[rgba(238,43,71,0.15)]' : ''}`}>
                  <Icon className={`size-4 ${isActive ? 'text-[#c70036] dark:text-[#ee2b47]' : 'text-[#ee2b47]'}`} />
                </div>
                <span className={`text-sm ${isActive ? 'font-semibold text-[#c70036] dark:text-[#e4e4e7]' : 'font-medium text-[#52525c] dark:text-[#71717a]'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Conta */}
        <div className="px-3 pb-4 pt-1 border-t border-[#f4f4f5] dark:border-[rgba(255,255,255,0.06)] space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-[12px] hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer">
            <Settings className="size-4 text-black dark:text-[#71717a] shrink-0" />
            <span className="text-sm font-medium text-[#52525c] dark:text-[#71717a]">Configurações</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-[12px] hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer"
          >
            <LogOut className="size-4 text-black dark:text-[#71717a] shrink-0" />
            <span className="text-sm font-medium text-[#52525c] dark:text-[#71717a]">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
