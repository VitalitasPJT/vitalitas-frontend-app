import React from 'react'

export type NotificationType = 'assessment' | 'message' | 'alert'

interface NotificationItemProps {
  type: NotificationType
  title: string
  time: string
}

/**
 * Item individual da lista de notificações.
 * Tipos: assessment (azul), message (verde), alert (vermelho).
 */
const notificationConfig: Record<
  NotificationType,
  { bg: string; iconColor: string; icon: React.ReactNode }
> = {
  assessment: {
    bg: 'bg-blue-100',
    iconColor: '#155DFC',
    icon: (
      // Ícone de calendário
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="3.33" width="15" height="15" rx="2" stroke="#155DFC" strokeWidth="1.67" />
        <path d="M6.67 1.67V5" stroke="#155DFC" strokeWidth="1.67" strokeLinecap="round" />
        <path d="M13.33 1.67V5" stroke="#155DFC" strokeWidth="1.67" strokeLinecap="round" />
        <path d="M2.5 8.33H17.5" stroke="#155DFC" strokeWidth="1.67" strokeLinecap="round" />
      </svg>
    ),
  },
  message: {
    bg: 'bg-green-100',
    iconColor: '#00A63E',
    icon: (
      // Ícone de mensagem
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M2.5 3.33H17.5V13.33H2.5V3.33Z"
          stroke="#00A63E"
          strokeWidth="1.67"
          strokeLinejoin="round"
        />
        <path d="M2.5 3.33L10 10L17.5 3.33" stroke="#00A63E" strokeWidth="1.67" />
      </svg>
    ),
  },
  alert: {
    bg: 'bg-red-100',
    iconColor: '#E7000B',
    icon: (
      // Ícone de alerta
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2.5L18.33 16.67H1.67L10 2.5Z"
          stroke="#E7000B"
          strokeWidth="1.67"
          strokeLinejoin="round"
        />
        <path d="M10 8.33V11.67" stroke="#E7000B" strokeWidth="1.67" strokeLinecap="round" />
        <circle cx="10" cy="14.17" r="0.83" fill="#E7000B" />
      </svg>
    ),
  },
}

const NotificationItem: React.FC<NotificationItemProps> = ({ type, title, time }) => {
  const config = notificationConfig[type]

  return (
    <div className="flex items-start gap-3 px-3 pt-3 rounded-xl">
      {/* Ícone com fundo colorido */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${config.bg}`}>
        {config.icon}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-sm font-semibold text-zinc-900 truncate">{title}</span>
        <span className="text-xs text-zinc-500">{time}</span>
      </div>
    </div>
  )
}

export default NotificationItem