import { DashboardLayout } from '@/shared/components/dashboard/DashboardLayout';
import { Header } from '@/shared/components/dashboard/Header';
import { useActivePageTitle } from '@/shared/hooks/useActivePageTitle';

export default function InstrutorDashboard() {
  const pageTitle = useActivePageTitle();

  return (
    <DashboardLayout>
      <Header
        title={pageTitle ?? 'Dashboard'}
        subtitle="Visão geral das suas atividades"
        actions={[
          { label: 'Exportar', variant: 'secondary' },
          { label: 'Novo Aluno', to: '/user/instrutor/alunos/criar', variant: 'primary' },
        ]}
      />

      {/* 
        TODO: adicionar os componentes do instrutor aqui
        Ex: <StatsInstrutor /> <AlunosRecentes /> <ProximasAvaliacoes />
      */}
    </DashboardLayout>
  );
}
