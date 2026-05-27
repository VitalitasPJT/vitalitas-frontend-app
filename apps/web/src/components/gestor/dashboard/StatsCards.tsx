import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { listarAlunos } from '../../../services/gestorService';
import type { AlunoItem } from '../../../services/gestorService';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor: string;
  subtitleColorDark: string;
  icon: React.ReactNode;
  loading?: boolean;
}

function StatCard({ title, value, subtitle, subtitleColor, subtitleColorDark, icon, loading }: StatCardProps) {
  return (
    <div className="
      bg-white dark:bg-[#1c1c1f]
      rounded-[14px]
      border border-[rgba(170,170,170,0.67)] dark:border-[rgba(255,255,255,0.06)]
      p-6 flex flex-col gap-6
      transition-colors duration-300
    ">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-[#0a0a0a] dark:text-[#e4e4e7]">{title}</h3>
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        {loading ? (
          <div className="h-9 w-16 bg-gray-100 dark:bg-[#2c2c30] rounded animate-pulse" />
        ) : (
          <div className="text-4xl text-[#0a0a0a] dark:text-[#e4e4e7]">{value}</div>
        )}
        <p className="text-xs"
          style={{ color: subtitleColor }}
          // Tailwind não suporta dynamic dark: values, então usamos style inline com CSS var trick
        >
          <span className="dark-subtitle" data-light={subtitleColor} data-dark={subtitleColorDark}>
            {subtitle}
          </span>
        </p>
      </div>
    </div>
  );
}

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

  const total   = alunos.length;
  const ativos  = alunos.filter((a) => a.StatusPagamento?.toLowerCase() === 'pago').length;
  const inativos = alunos.filter((a) => a.StatusPagamento?.toLowerCase() === 'vencido').length;

  const cards = [
    {
      title: 'Total de Usuários',
      value: String(total),
      subtitle: total === 0 ? 'Nenhum usuário cadastrado' : `${total} aluno${total !== 1 ? 's' : ''} na academia`,
      subtitleColor: '#6a7282',
      subtitleColorDark: '#71717a',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="#6A7282" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Usuários Ativos',
      value: String(ativos),
      subtitle: ativos === 0 ? 'Sem planos ativos' : `${ativos} com pagamento em dia`,
      subtitleColor: '#00a63e',
      subtitleColorDark: '#00c950',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00C950" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="#00C950" strokeWidth="2" />
          <polyline points="16 11 18 13 22 9" stroke="#00C950" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Usuários Inativos',
      value: String(inativos),
      subtitle: inativos === 0 ? 'Sem planos vencidos' : `${inativos} com pagamento vencido`,
      subtitleColor: '#e7000b',
      subtitleColorDark: '#fb2c36',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#FB2C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="#FB2C36" strokeWidth="2" />
          <line x1="18" y1="10" x2="22" y2="14" stroke="#FB2C36" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="10" x2="18" y2="14" stroke="#FB2C36" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Crescimento',
      value: '0%',
      subtitle: 'Últimos 30 dias',
      subtitleColor: '#155dfc',
      subtitleColorDark: '#2b7fff',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#2B7FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="17 6 23 6 23 12" stroke="#2B7FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card) => (
        <StatCard key={card.title} {...card} loading={loading} />
      ))}
    </div>
  );
}
