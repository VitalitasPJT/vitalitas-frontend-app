import { useState } from 'react';
import { DashboardLayout } from '@/shared/components/dashboard/DashboardLayout';
import { Header } from '@/shared/components/dashboard/Header';
import { useActivePageTitle } from '@/shared/hooks/useActivePageTitle';
import { StatsCards } from '../components/dashboard/GestorDashboardCards';
import { SearchFilter } from '../components/dashboard/SearchFilter';
import { UsersTable } from '../components/dashboard/UsersTable';

export default function DashboardGestor() {
  const [searchTerm, setSearchTerm] = useState('');
  const pageTitle = useActivePageTitle();

  return (
    <DashboardLayout>
      <Header
        title={pageTitle ?? 'Usuários'}
        subtitle="Gerencie todos os membros da academia"
        actions={[
          { label: 'Exportar', variant: 'secondary' },
          { label: 'Criar novo usuário', to: '/criar-usuario', variant: 'primary' },
        ]}
      />
      <StatsCards />
      <SearchFilter onSearch={setSearchTerm} />
      <UsersTable searchTerm={searchTerm} />
    </DashboardLayout>
  );
}
