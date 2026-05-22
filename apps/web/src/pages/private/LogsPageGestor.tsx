import { Sidebar } from '../../components/gestor/dashboard/Sidebar';
import { Header } from '../../components/gestor/logsUserPage/Header';
import { StatsGrid } from '../../components/gestor/logsUserPage/StatsGrid';
import { SearchBar } from '../../components/gestor/logsUserPage/SearchBar';
import { ActivityList } from '../../components/gestor/logsUserPage/ActivityList';
import { MobileHeader } from '../../components/gestor/dashboard/MobileHeader';

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <MobileHeader title="Registro de Atividades" />
        <div className="max-w-[1400px] mx-auto p-6 lg:p-8">
          <Header
            title="Registro de Atividades"
            subtitle="Acompanhe todas as ações realizadas no sistema"
          />
          <StatsGrid />
          <SearchBar />
          <ActivityList />
        </div>
      </main>
    </div>
  );
}