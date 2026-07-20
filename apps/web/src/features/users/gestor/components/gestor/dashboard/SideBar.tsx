import { ChevronRight, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import { ThemeToggle } from '@/shared/components/ui/TemasToggle';
import type { MenuItem, UserProfile } from './menuConfig';

interface SidebarProps {
  menuItems: MenuItem[];
  user: UserProfile;
  activePath: string;
}

function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="size-12 rounded-full bg-[#ee2b47] flex items-center justify-center border-2 border-white dark:border-[#2c2c30] shadow-md">
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );
}

export function Sidebar({ menuItems, user, activePath }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/vitalitas/user/login');
  };

  return (
    <aside className={`
      hidden lg:flex sticky top-0 left-0 h-screen flex-col
      bg-white dark:bg-[#1c1c1f]
      border-r border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
      z-40 transition-all duration-500 ease-in-out
      ${isCollapsed ? 'w-[72px]' : 'w-[287px]'}
    `}>

      {/* ── User Profile ── */}
      <div className={`
        px-3 py-4
        border-b border-[#f4f4f5] dark:border-[rgba(255,255,255,0.06)]
        flex items-center gap-2
        ${isCollapsed ? 'flex-col' : 'flex-row'}
      `}>
        <div className="relative shrink-0">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="size-12 rounded-full object-cover border-2 border-white dark:border-[#2c2c30] shadow-md"
            />
          ) : (
            <AvatarFallback name={user.name} />
          )}
          <div className="absolute bottom-0 right-0 size-4 bg-[#00c950] border-2 border-white dark:border-[#1c1c1f] rounded-full" />
        </div>

        {!isCollapsed && (
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-[15px] text-[#18181b] dark:text-[#e4e4e7] tracking-[-0.375px] truncate">
              {user.name}
            </h2>
            <p className="font-medium text-xs text-[#71717b] dark:text-[#71717a] tracking-[0.3px] uppercase">
              {user.roleLabel}
            </p>
          </div>
        )}

        {!isCollapsed && (
          <div className="flex items-center gap-1 shrink-0">
            <ThemeToggle variant="inline" />
            <button
              onClick={() => setIsCollapsed(true)}
              className="size-6 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer"
              aria-label="Colapsar menu"
            >
              <ChevronRight className="size-5 text-black/50 dark:text-white/40" />
            </button>
          </div>
        )}

        {isCollapsed && (
          <div className="flex flex-col items-center gap-1 mt-1">
            <ThemeToggle variant="inline" />
            <button
              onClick={() => setIsCollapsed(false)}
              className="size-6 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer rotate-180"
              aria-label="Expandir menu"
            >
              <ChevronRight className="size-5 text-black/50 dark:text-white/40" />
            </button>
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-2 pt-4 pb-4 space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;

          return (
            <button
              key={item.label}
              title={isCollapsed ? item.label : undefined}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center gap-3 rounded-[14px] transition-colors relative cursor-pointer py-3.5
                ${isActive
                  ? 'bg-[#fff1f2] dark:bg-[#2c1f20] border border-[#ffe4e6] dark:border-[#3d1f22]'
                  : 'hover:bg-gray-100 dark:hover:bg-[#2c2c30]'}
                ${isCollapsed ? 'px-[10px]' : 'px-3'}
              `}
            >
              {isActive && (
                <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-[22px] bg-[#ff2056] dark:bg-[#ee2b47] rounded-r-lg" />
              )}
              <div className={`size-7 rounded-[10px] flex items-center justify-center shrink-0
                ${isActive ? 'bg-[rgba(255,228,230,0.5)] dark:bg-[rgba(238,43,71,0.15)]' : ''}
              `}>
                <Icon className={`size-5 ${isActive ? 'text-[#c70036] dark:text-[#ee2b47]' : 'text-[#ee2b47]'}`} />
              </div>
              <span className={`
                text-sm whitespace-nowrap transition-all duration-200
                ${isActive ? 'font-semibold text-[#c70036] dark:text-[#e4e4e7]' : 'font-medium text-[#52525c] dark:text-[#71717a]'}
                ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
              `}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ── Conta ── */}
      <div className="px-2 pb-6">
        {!isCollapsed && (
          <p className="px-3 mb-2 text-[11px] font-semibold text-black dark:text-[#71717a] tracking-[0.55px] uppercase">
            Conta
          </p>
        )}
        <div className="space-y-1">
          <button
            title={isCollapsed ? 'Configurações' : undefined}
            className={`w-full flex items-center gap-3 py-3 rounded-[14px]
              hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer
              ${isCollapsed ? 'px-[10px]' : 'px-4'}`}
          >
            <Settings className="size-5 text-[#52525c] dark:text-[#71717a] shrink-0" />
            <span className={`text-[13px] font-medium text-[#52525c] dark:text-[#71717a] whitespace-nowrap transition-all duration-200
              ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Configurações
            </span>
          </button>
          <button
            title={isCollapsed ? 'Logout' : undefined}
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 py-3 rounded-[14px]
              hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer
              ${isCollapsed ? 'px-[10px]' : 'px-4'}`}
          >
            <LogOut className="size-5 text-[#52525c] dark:text-[#71717a] shrink-0" />
            <span className={`text-[13px] font-medium text-[#52525c] dark:text-[#71717a] whitespace-nowrap transition-all duration-200
              ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
