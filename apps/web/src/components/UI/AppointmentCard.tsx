import React from 'react'

export type AppointmentStatus = 'atrasado' | 'no_prazo' | 'agendado'

interface AppointmentCardProps {
  name: string
  type: string
  time: string
  status: AppointmentStatus
}

/**
 * Card de avaliação dentro de "Próximas Avaliações".
 * Status possíveis:
 *   atrasado  → badge vermelho
 *   no_prazo  → badge verde
 *   agendado  → badge azul
 */
const statusConfig: Record<
  AppointmentStatus,
  { label: string; bgColor: string; textColor: string }
> = {
  atrasado: {
    label: 'ATRASADO',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
  },
  no_prazo: {
    label: 'NO PRAZO',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
  agendado: {
    label: 'AGENDADO',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ name, type, time, status }) => {
  const config = statusConfig[status]

  return (
    <div className="flex items-start gap-3 px-[18px] pt-[18px] pb-2 rounded-xl border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50">
      {/* Ícone de calendário com gradiente vermelho */}
      <div
        className="w-12 h-12 rounded-[10px] flex items-center justify-center shadow-md flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #FB2C36 0%, #E7000B 100%)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" stroke="white" strokeWidth="2" />
          <path d="M8 2V6M16 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M2 9H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 13V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Detalhes */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <span className="text-sm font-bold text-zinc-900">{name}</span>
        <span className="text-xs text-zinc-600">{type}</span>

        {/* Hora + badge de status */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-zinc-900">{time}</span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${config.bgColor} ${config.textColor}`}
          >
            {config.label}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard