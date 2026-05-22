import { DashboardLayout } from '../../components/gestor/dashboard/DashboardLayout';
import { Header } from '../../components/gestor/logsUserPage/Header';
import { StatsGrid } from '../../components/gestor/logsUserPage/StatsGrid';
import { SearchBar } from '../../components/gestor/logsUserPage/SearchBar';
import { ActivityList } from '../../components/gestor/logsUserPage/ActivityList';

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