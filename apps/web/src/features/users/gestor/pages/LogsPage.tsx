import { DashboardLayout } from '@/shared/components/dashboard/DashboardLayout';
import { Header } from '@/shared/components/dashboard/Header';
import { useActivePageTitle } from '@/shared/hooks/useActivePageTitle';
import { StatsGrid } from '../components/logs-user-page/StatsGrid';
import { ActivitySearchBar } from '../components/logs-user-page/ActivitySearchBar';
import { ActivityList } from '../components/logs-user-page/ActivityList';

/**
 * Correções em relação à versão anterior:
 * - DashboardLayout importado de @/features/dashboard/ (não mais
 *   @/shared/components/dashboard/, que era o caminho da opção que não
 *   foi escolhida — ver decisão registrada sobre onde os componentes de
 *   dashboard compartilhados moram).
 * - Header local (components/gestor/logs-user-page/Header.tsx) removido
 *   em favor do Header compartilhado — o local era uma versão mais antiga
 *   e mais simples do mesmo componente (sem actions, sem dark mode),
 *   exatamente o tipo de duplicação por nome genérico que já apareceu com
 *   SideBar/SideBarComp e com o StatCard local vs. compartilhado.
 * - title do Header agora vem de useActivePageTitle, mesma fonte usada
 *   por DashboardGestor.tsx — troquei "Registro de Atividades" (hardcoded)
 *   pelo label real do menuConfig ("Atividades"). Se "Registro de
 *   Atividades" for o texto que você quer mostrar mesmo assim, é só
 *   sobrescrever com um fallback próprio em vez do hook — me avisa.
 * - SearchBar → ActivitySearchBar, acompanhando o rename já feito no
 *   arquivo do componente.
 */
export default function LogsPageGestor() {
  const pageTitle = useActivePageTitle();

  return (
    <DashboardLayout>
      <div className="max-w-[1400px] mx-auto">
        <Header
          title={pageTitle ?? 'Atividades'}
          subtitle="Acompanhe todas as ações realizadas no sistema"
        />
        <StatsGrid />
        <ActivitySearchBar />
        <ActivityList />
      </div>
    </DashboardLayout>
  );
}
