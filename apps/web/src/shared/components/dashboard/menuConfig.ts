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
import { ConstRoutes } from '@/shared/constants/Routes';

export type UserRole = 'Gestor' | 'Instrutor' | 'Aluno' | 'Administrador';

export interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

export interface UserProfile {
  name: string;
  role: UserRole;
  roleLabel: string;
  avatarUrl: string | null;
}

// TipoUsuario vem como string do backend ("Gestor", "Instrutor", etc.)
export const roleLabelMap: Record<UserRole, string> = {
  Gestor:         'Gestor',
  Instrutor:      'Instrutor',
  Aluno:          'Aluno',
  Administrador:  'Administrador',
};

// Paths raiz (Usuários/Gestor e Dashboard/Instrutor) agora vêm de
// ConstRoutes (shared/constants/Routes.ts) em vez de string literal —
// esses dois já existiam lá (ConstRoutes.GESTOR/ConstRoutes.INSTRUTOR).
// Os subpaths (Financeiro, Contratos, Atividades...) não têm constante
// equivalente em Routes.ts ainda, então continuam literais.
export const menuByRole: Partial<Record<UserRole, MenuItem[]>> = {
  Gestor: [
    { icon: Users,       label: 'Usuários',             path: ConstRoutes.GESTOR },
    { icon: DollarSign,  label: 'Financeiro',            path: '/user/gestor/financeiro' },
    { icon: FileText,    label: 'Contratos',             path: '/user/gestor/contratos' },
    { icon: Activity,    label: 'Atividades',            path: '/user/gestor/logs' },
    { icon: Video,       label: 'Vídeos Institucionais', path: '/user/gestor/videos' },
  ],
  Instrutor: [
    { icon: LayoutDashboard, label: 'Dashboard',  path: ConstRoutes.INSTRUTOR },
    { icon: UserCheck,       label: 'Alunos',     path: '/user/instrutor/alunos' },
    { icon: ClipboardList,   label: 'Avaliações', path: '/user/instrutor/avaliacoes' },
  ],
};
