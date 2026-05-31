import React from 'react'

interface StatCardProps {
  icon: React.ReactNode
  iconGradient: string
  value: string | number
  label: string
  subtitle: string
  trend?: 'up' | 'down' | 'neutral'
}

/**
 * Card reutilizável para exibição de métricas no Dashboard do Instrutor.
 * Usado para: Alunos Ativos, Avaliações Hoje, Impedâncias, Próximas Avaliações.
 */
const StatCard: React.FC<StatCardProps> = ({
  icon,
  iconGradient,
  value,
  label,
  subtitle,
  trend = 'up',
}) => {
  const trendColor =
    trend === 'up'
      ? 'text-green-500'
      : trend === 'down'
      ? 'text-red-500'
      : 'text-zinc-400'

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-5 flex flex-col gap-4 flex-1 min-w-0">
      {/* Header: ícone + indicador de tendência */}
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
          style={{ background: iconGradient }}
        >
          {icon}
        </div>

        {/* Indicador de crescimento (seta para cima) */}
        <svg
          className={trendColor}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11L8 5L14 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Valor + Label + Subtítulo */}
      <div className="flex flex-col gap-1">
        <span className="text-[30px] font-bold text-zinc-900 leading-none">
          {value}
        </span>
        <span className="text-sm font-medium text-zinc-700">{label}</span>
        <span className="text-xs text-zinc-400">{subtitle}</span>
      </div>
    </div>
  )
}

export default StatCard