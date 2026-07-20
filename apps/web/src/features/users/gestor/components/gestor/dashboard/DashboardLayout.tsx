import { useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import { Sidebar } from './SideBar';
import { MobileHeader } from './MobileHeader';
import { menuByRole, roleLabelMap } from './menuConfig';
import type { UserProfile, UserRole } from './menuConfig';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const role = user.TipoUsuario as UserRole;

  const userProfile: UserProfile = {
    name: user.Nome ?? roleLabelMap[role] ?? role,
    role,
    roleLabel: roleLabelMap[role] ?? role,
    avatarUrl: user.AvatarUrl ?? null,
  };

  const menuItems = menuByRole[role] ?? [];
  const activePath = location.pathname;
  const activeItem = menuItems.find((i) => i.path === activePath);
  const pageTitle = activeItem?.label ?? userProfile.roleLabel;

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] dark:bg-[#141417] transition-colors duration-300">
      <Sidebar menuItems={menuItems} user={userProfile} activePath={activePath} />

      <div className="flex-1 flex flex-col min-w-0">
        <MobileHeader
          title={pageTitle}
          menuItems={menuItems}
          user={userProfile}
          activePath={activePath}
        />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
