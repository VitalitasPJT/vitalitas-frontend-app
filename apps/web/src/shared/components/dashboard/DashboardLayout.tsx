import { useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import { Sidebar } from './Sidebar';
import { MobileHeader } from './MobileHeader';
import { useActivePageTitle } from '../../hooks/useActivePageTitle';
import { menuByRole, roleLabelMap } from './menuConfig';
import type { UserProfile, UserRole } from './menuConfig';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Movido de features/gestor/components/gestor/dashboard/ para
 * features/dashboard/components/. Este layout sempre foi role-agnóstico
 * (menuByRole já resolve o menu certo por role), mas morava fisicamente
 * dentro da feature "gestor" — o que fazia a feature "instrutor" importar
 * atravessando a pasta do gestor (../../gestor/components/gestor/...) pra
 * poder reusá-lo. Isso acoplava instrutor a uma reorganização futura de
 * gestor sem nenhum aviso. Agora vive em uma feature própria, dashboard/,
 * que gestor e instrutor importam igualmente.
 *
 * pageTitle agora vem de useActivePageTitle (hooks/useActivePageTitle.ts)
 * em vez de ser calculado aqui — mesma fonte usada pelas páginas
 * (DashboardGestor, DashboardInstrutor...) para o Header desktop, então
 * MobileHeader e Header nunca mais divergem no título da página ativa.
 */
export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useAuth();
  const location = useLocation();
  const pageTitle = useActivePageTitle();

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

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] dark:bg-[#141417] transition-colors duration-300">
      <Sidebar menuItems={menuItems} user={userProfile} activePath={activePath} />

      <div className="flex-1 flex flex-col min-w-0">
        <MobileHeader
          title={pageTitle ?? userProfile.roleLabel}
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
