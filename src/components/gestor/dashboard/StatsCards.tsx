import svgPaths from "../../../imports/svg-59b1zfc4li";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, subtitle, subtitleColor, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-[#0a0a0a]">{title}</h3>
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <div className="text-4xl text-[#0a0a0a]">{value}</div>
        <p className="text-xs" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatCard
        title="Total de Usuários"
        value="0"
        subtitle="Nenhum usuário cadastrado"
        subtitleColor="#6a7282"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d={svgPaths.p32887f80}
              stroke="#6A7282"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p3694d280}
              stroke="#6A7282"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p1f197700}
              stroke="#6A7282"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p3bf3e100}
              stroke="#6A7282"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        }
      />

      <StatCard
        title="Usuários Ativos"
        value="0"
        subtitle="Sem planos ativos"
        subtitleColor="#00a63e"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d={svgPaths.p32887f80}
              stroke="#00C950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p3694d280}
              stroke="#00C950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p2d50f500}
              stroke="#00C950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        }
      />

      <StatCard
        title="Usuários Inativos"
        value="0"
        subtitle="Sem planos vencidos"
        subtitleColor="#e7000b"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d={svgPaths.p32887f80}
              stroke="#FB2C36"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p3694d280}
              stroke="#FB2C36"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p2c08a8a0}
              stroke="#FB2C36"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p2408dcc0}
              stroke="#FB2C36"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        }
      />

      <StatCard
        title="Crescimento"
        value="0%"
        subtitle="Últimos 30 dias"
        subtitleColor="#155dfc"
        icon={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path
              d={svgPaths.pea6a680}
              stroke="#2B7FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
            <path
              d={svgPaths.p3155f180}
              stroke="#2B7FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33333"
            />
          </svg>
        }
      />
    </div>
  );
}
