import { useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import { menuByRole, roleLabelMap } from '@/shared/components/dashboard/menuConfig';
import type { UserRole } from '@/shared/components/dashboard/menuConfig';

/**
 * Resolve o título da página atual a partir da rota ativa e do menu do
 * role logado (mesma fonte de verdade usada pela Sidebar/MobileHeader).
 *
 * Extraído de dentro de DashboardLayout.tsx, que antes calculava isso só
 * pra si mesmo (uso interno no MobileHeader). Cada página (DashboardGestor,
 * DashboardInstrutor...) chamava o Header desktop manualmente com um
 * title hardcoded — que podia divergir do label real do menu (era o caso:
 * menuConfig tinha "Usuários", a página tinha "Gestão de Usuários").
 *
 * Com o hook, tanto DashboardLayout (pro MobileHeader) quanto cada página
 * (pro Header desktop) usam exatamente a mesma lógica de resolução —
 * sem duplicar a comparação de path e sem repetir string na mão.
 *
 * Retorna undefined enquanto o usuário ainda não está carregado; quem
 * consome decide o fallback (DashboardLayout já lida com user null antes
 * de renderizar).
 */
export function useActivePageTitle(): string | undefined {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return undefined;

  const role = user.TipoUsuario as UserRole;
  const menuItems = menuByRole[role] ?? [];
  const activeItem = menuItems.find((item) => item.path === location.pathname);

  return activeItem?.label ?? roleLabelMap[role] ?? role;
}
