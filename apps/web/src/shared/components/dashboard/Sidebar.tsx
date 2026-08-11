import { ChevronRight, Settings, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import { ThemeToggle } from '@/shared/components/ui/ThemeToggle';
import { Avatar } from '@/shared/components/ui/Avatar';
import type { MenuItem, UserProfile } from './menuConfig';

interface SidebarProps {
  menuItems: MenuItem[];
  user: UserProfile;
  activePath: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const SIDEBAR_COLLAPSED_KEY = 'sidebar-collapsed';

function getStoredCollapsed(): boolean {
  try {
    return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true';
  } catch {
    return false;
  }
}

export function Sidebar({ menuItems, user, activePath }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(getStoredCollapsed);
  const [isCollapsedLayout, setIsCollapsedLayout] = useState(isCollapsed);

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(isCollapsed));
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue sem persistir
    }

    if (isCollapsed) {
      const timer = setTimeout(() => setIsCollapsedLayout(true), 150);
      return () => clearTimeout(timer);
    }
    setIsCollapsedLayout(false);
  }, [isCollapsed]);

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
        flex items-center gap-2 overflow-hidden
        ${isCollapsedLayout ? 'flex-col justify-center' : 'flex-row'}
      `}>
        <div className="relative shrink-0">
          <Avatar
            initials={getInitials(user.name)}
            src={user.avatarUrl ?? undefined}
            alt={user.name}
            size="lg"
            tone="brand"
            className="border-2 border-white dark:border-[#2c2c30] shadow-md"
          />
          <div className="absolute bottom-0 right-0 size-4 bg-[#00c950] border-2 border-white dark:border-[#1c1c1f] rounded-full" />
        </div>

        <div className={`
          min-w-0 transition-all duration-200
          ${isCollapsed
            ? 'flex-none opacity-0 w-0 h-0 overflow-hidden pointer-events-none'
            : 'flex-1 opacity-100'}
        `}>
          <h2 className="font-semibold text-[15px] text-[#18181b] dark:text-[#e4e4e7] tracking-[-0.375px] truncate">
            {user.name}
          </h2>
          <p className="font-medium text-xs text-[#71717b] dark:text-[#71717a] tracking-[0.3px] uppercase">
            {user.roleLabel}
          </p>
        </div>

        <div className={`
          flex items-center gap-1 shrink-0 transition-all duration-500 ease-in-out
          ${isCollapsedLayout ? 'flex-col' : 'flex-row'}
        `}>
          <div className={`transition-opacity duration-200 ${isCollapsed && !isCollapsedLayout ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <ThemeToggle variant="inline" />
          </div>
          <button
            onClick={() => setIsCollapsed((c) => !c)}
            className="size-6 flex items-center justify-center rounded-full shrink-0 hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-colors cursor-pointer"
            aria-label={isCollapsed ? 'Expandir menu' : 'Colapsar menu'}
          >
            <ChevronRight
              className={`size-5 text-black/50 dark:text-white/40 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-2 pt-4 pb-4 space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;
          const isActiveExpanded = isActive && !isCollapsed;
          const showIconBadge = isActive && isCollapsed;

          return (
            <button
              key={item.label}
              title={isCollapsed ? item.label : undefined}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center rounded-[14px] transition-all duration-500 ease-in-out relative cursor-pointer py-3.5
                ${isActiveExpanded
                  ? 'bg-[#fff1f2] dark:bg-[#2c1f20] border border-[#ffe4e6] dark:border-[#3d1f22]'
                  : !isActive
                    ? 'hover:bg-gray-100 dark:hover:bg-[#2c2c30]'
                    : ''}
                ${isCollapsed ? 'px-[10px] gap-0' : 'px-3 gap-3'}
              `}
            >
              {isActive && (
                <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-[22px] bg-[#ff2056] dark:bg-[#ee2b47] rounded-r-lg" />
              )}
              <div className={`size-7 rounded-[10px] flex items-center justify-center shrink-0
                ${showIconBadge ? 'bg-[rgba(255,228,230,0.5)] dark:bg-[rgba(238,43,71,0.15)]' : ''}
              `}>
                <Icon className={`size-5 ${isActive ? 'text-[#c70036] dark:text-[#ee2b47]' : 'text-[#ee2b47]'}`} />
              </div>
              <span className={`
                text-sm whitespace-nowrap transition-all duration-200
                ${isActive ? 'font-semibold text-[#c70036] dark:text-[#e4e4e7]' : 'font-medium text-[#52525c] dark:text-[#71717a]'}
                ${isCollapsed ? 'opacity-0 w-0 h-0 overflow-hidden' : 'opacity-100'}
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
            className={`w-full flex items-center py-3 rounded-[14px]
              hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-all duration-500 ease-in-out cursor-pointer
              ${isCollapsed ? 'px-[10px] gap-0' : 'px-4 gap-3'}`}
          >
            <Settings className="size-5 text-[#52525c] dark:text-[#71717a] shrink-0" />
            <span className={`text-[13px] font-medium text-[#52525c] dark:text-[#71717a] whitespace-nowrap transition-all duration-200
              ${isCollapsed ? 'opacity-0 w-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              Configurações
            </span>
          </button>
          <button
            title={isCollapsed ? 'Logout' : undefined}
            onClick={handleLogout}
            className={`w-full flex items-center py-3 rounded-[14px]
              hover:bg-gray-100 dark:hover:bg-[#2c2c30] transition-all duration-500 ease-in-out cursor-pointer
              ${isCollapsed ? 'px-[10px] gap-0' : 'px-4 gap-3'}`}
          >
            <LogOut className="size-5 text-[#52525c] dark:text-[#71717a] shrink-0" />
            <span className={`text-[13px] font-medium text-[#52525c] dark:text-[#71717a] whitespace-nowrap transition-all duration-200
              ${isCollapsed ? 'opacity-0 w-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
