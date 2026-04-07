import { TrendingUp, Users, DollarSign, UserCheck } from 'lucide-react';
import { StatsCard } from './StatsCard';

export function StatsGrid() {
  // TODO: Buscar dados do backend via GET
  // const { data } = await fetch('/api/stats');
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatsCard
        title="Total de Atividades"
        value="—"
        subtitle="Últimas 24 horas"
        icon={TrendingUp}
        iconColor="#f97316"
        iconBgColor="#fff7ed"
      />
      <StatsCard
        title="Ações de Usuários"
        value="—"
        subtitle="vs. ontem"
        icon={Users}
        iconColor="#3b82f6"
        iconBgColor="#eff6ff"
        subtitleColor="#3b82f6"
      />
      <StatsCard
        title="Transações"
        value="—"
        subtitle="Pagamentos confirmados"
        icon={DollarSign}
        iconColor="#22c55e"
        iconBgColor="#f0fdf4"
        subtitleColor="#22c55e"
      />
      <StatsCard
        title="Usuários Ativos"
        value="—"
        subtitle="Online agora"
        icon={UserCheck}
        iconColor="#06b6d4"
        iconBgColor="#ecfeff"
      />
    </div>
  );
}   