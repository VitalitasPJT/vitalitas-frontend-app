import { useState } from 'react';
import { DashboardLayout } from '../components/gestor/dashboard/DashboardLayout';
import { Header } from '../components/gestor/dashboard/Header';
import { StatsCards } from '../components/gestor/dashboard/StatsCards';
import { SearchFilter } from '../components/gestor/dashboard/SearchFilter';
import { UsersTable } from '../components/gestor/dashboard/UsersTable';

export default function DashboardGestor() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DashboardLayout>
      <Header
        title="Gestão de Usuários"
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
