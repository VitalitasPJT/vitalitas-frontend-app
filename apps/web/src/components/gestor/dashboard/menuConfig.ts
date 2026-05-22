import {
  Users,
  DollarSign,
  FileText,
  Activity,
  Video,
  LayoutDashboard,
  UserCheck,
  ClipboardList,
} from 'lucide-react';

export type UserRole = 'gestor' | 'instrutor';

export interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

export interface UserProfile {
  name: string;
  role: UserRole;
  roleLabel: string;
  avatarUrl: string | null; // null = sem avatar ainda (usa iniciais)
}

// ─── Mapeamento Tipo (number) → UserRole ────────────────────────────
// Tipo 1 = instrutor | Tipo 3 = gestor
export const tipoToRole: Record<number, UserRole> = {
  1: 'instrutor',
  3: 'gestor',
};

// ─── Itens de menu por perfil ────────────────────────────────────────
export const menuByRole: Record<UserRole, MenuItem[]> = {
  gestor: [
    { icon: Users,       label: 'Usuários',              path: '/user/gestor' },
    { icon: DollarSign,  label: 'Financeiro',             path: '/user/gestor/financeiro' },
    { icon: FileText,    label: 'Contratos',              path: '/user/gestor/contratos' },
    { icon: Activity,    label: 'Atividades',             path: '/user/gestor/logs' },
    { icon: Video,       label: 'Vídeos Institucionais',  path: '/user/gestor/videos' },
  ],
  instrutor: [
    { icon: LayoutDashboard, label: 'Dashboard',  path: '/user/instrutor' },
    { icon: UserCheck,       label: 'Alunos',     path: '/user/instrutor/alunos' },
    { icon: ClipboardList,   label: 'Avaliações', path: '/user/instrutor/avaliacoes' },
  ],
};

export const roleLabelMap: Record<UserRole, string> = {
  gestor: 'Gestor',
  instrutor: 'Instrutor',
};
