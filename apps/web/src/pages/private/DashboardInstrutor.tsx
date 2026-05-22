import { DashboardLayout } from '../../components/gestor/dashboard/DashboardLayout';
import { Header } from '../../components/gestor/dashboard/Header';

export default function InstrutorDashboard() {
  return (
    <DashboardLayout>
      <Header
        title="Dashboard"
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
