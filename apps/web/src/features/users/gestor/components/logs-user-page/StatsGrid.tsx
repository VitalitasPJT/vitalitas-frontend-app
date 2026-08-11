import { TrendingUp, Users, DollarSign, UserCheck } from 'lucide-react';
import { StatsCard } from '@/shared/components/ui/StatsCard';

// TODO: Buscar dados do backend via GET /api/stats — lógica de dados
// mantida como estava; só a apresentação (StatsCard compartilhado +
// tokens de dark mode) foi atualizada.
export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatsCard
        title="Total de Atividades"
        value="—"
        subtitle="Últimas 24 horas"
        icon={TrendingUp}
        tone="orange"
      />
      <StatsCard
        title="Ações de Usuários"
        value="—"
        subtitle="vs. ontem"
        icon={Users}
        tone="info"
      />
      <StatsCard
        title="Transações"
        value="—"
        subtitle="Pagamentos confirmados"
        icon={DollarSign}
        tone="success"
      />
      <StatsCard
        title="Usuários Ativos"
        value="—"
        subtitle="Online agora"
        icon={UserCheck}
        tone="cyan"
      />
    </div>
  );
}
