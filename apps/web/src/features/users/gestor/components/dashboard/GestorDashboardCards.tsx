import { useEffect, useState } from 'react';
import { Users, UserCheck, UserX, TrendingUp } from 'lucide-react';
import { useAuth } from '@/shared/hooks/useAuth';
import { StatsCard } from '@/shared/components/ui/StatsCard';
import { listarAlunos } from '../../services/gestorService';
import type { AlunoItem } from '../../services/gestorService';

/**
 * O StatCard local (SVGs desenhados à mão, cor repetida em cada path, dark
 * mode via data-attribute sem CSS correspondente) foi substituído pelo
 * StatsCard compartilhado (features/dashboard/components/StatsCard.tsx),
 * que também passou a ser usado na tela de Atividades/Logs. Ícones agora
 * vêm de lucide-react (já padrão no resto do projeto) em vez de SVG
 * inline; a cor é resolvida pela prop `tone`, não mais copiada à mão.
 */
export function StatsCards() {
  const { user } = useAuth();
  const [alunos, setAlunos] = useState<AlunoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.IdAcademia) { setLoading(false); return; }
    listarAlunos(user.IdAcademia)
      .then((res) => setAlunos(res.Alunos ?? []))
      .catch(() => setAlunos([]))
      .finally(() => setLoading(false));
  }, [user?.IdAcademia]);

  const total = alunos.length;
  const ativos = alunos.filter((a) => a.StatusPagamento?.toLowerCase() === 'pago').length;
  const inativos = alunos.filter((a) => a.StatusPagamento?.toLowerCase() === 'vencido').length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatsCard
        title="Total de Usuários"
        value={String(total)}
        subtitle={total === 0 ? 'Nenhum usuário cadastrado' : `${total} aluno${total !== 1 ? 's' : ''} na academia`}
        icon={Users}
        tone="neutral"
        loading={loading}
      />
      <StatsCard
        title="Usuários Ativos"
        value={String(ativos)}
        subtitle={ativos === 0 ? 'Sem planos ativos' : `${ativos} com pagamento em dia`}
        icon={UserCheck}
        tone="success"
        loading={loading}
      />
      <StatsCard
        title="Usuários Inativos"
        value={String(inativos)}
        subtitle={inativos === 0 ? 'Sem planos vencidos' : `${inativos} com pagamento vencido`}
        icon={UserX}
        tone="danger"
        loading={loading}
      />
      <StatsCard
        title="Crescimento"
        value="0%"
        subtitle="Últimos 30 dias"
        icon={TrendingUp}
        tone="info"
        loading={loading}
      />
    </div>
  );
}
