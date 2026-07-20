import { DashboardLayout } from '../components/gestor/dashboard/DashboardLayout';
import { Header } from '../components/gestor/logs-user-page/Header';
import { StatsGrid } from '../components/gestor/logs-user-page/StatsGrid';
import { SearchBar } from '../components/gestor/logs-user-page/SearchBar';
import { ActivityList } from '../components/gestor/logs-user-page/ActivityList';

export default function LogsPageGestor() {
  return (
    <DashboardLayout>
      <div className="max-w-[1400px] mx-auto">
        <Header
          title="Registro de Atividades"
          subtitle="Acompanhe todas as ações realizadas no sistema"
        />
        <StatsGrid />
        <SearchBar />
        <ActivityList />
      </div>
    </DashboardLayout>
  );
}