import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Sidebar } from './Sidebar';
import { MobileHeader } from './MobileHeader';
import { menuByRole, tipoToRole, roleLabelMap} from './menuConfig';
import type { UserProfile } from './menuConfig';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout principal do dashboard.
 *
 * Lê o usuário do AuthContext (user.Tipo) e monta automaticamente:
 *  - os itens de menu corretos para o perfil
 *  - o nome/avatar do perfil
 *
 * ⚠️  QUANDO A API DE PERFIL ESTIVER PRONTA:
 *  Substitua os valores mockados em `buildUserProfile` pelos dados reais,
 *  ex: buscar GET /usuarios/:id e pegar name + avatarUrl da resposta.
 */

function buildUserProfile(tipo: number): UserProfile {
  const role = tipoToRole[tipo] ?? 'gestor';

  // ─────────────────────────────────────────────────────────────
  // TODO: substituir por dados reais da API quando disponível
  // Ex: const profile = await api.get(`/usuarios/${user.Id}/perfil`)
  //     return { name: profile.nome, role, roleLabel: roleLabelMap[role], avatarUrl: profile.avatarUrl }
  // ─────────────────────────────────────────────────────────────
  const mockNames: Record<string, string> = {
    gestor: 'Gestor',
    instrutor: 'Instrutor',
  };

  return {
    name: mockNames[role],
    role,
    roleLabel: roleLabelMap[role],
    avatarUrl: null, // null = exibe iniciais; substituir por URL da API futuramente
  };
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const userProfile = buildUserProfile(user.Tipo);
  const menuItems = menuByRole[userProfile.role];
  const activePath = location.pathname;

  // Título da tela ativa para o MobileHeader
  const activeItem = menuItems.find((i) => i.path === activePath);
  const pageTitle = activeItem?.label ?? userProfile.roleLabel;

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
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
