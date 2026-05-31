import React from 'react'

type AgendaColor = 'red' | 'green' | 'blue'

interface AgendaItemProps {
  time: string
  name: string
  type: string
  color: AgendaColor
}

/**
 * Item individual da "Agenda de Hoje".
 * A bolinha colorida indica o tipo de atividade:
 *   red   → atrasado/urgente
 *   green → concluído/no prazo
 *   blue  → agendado
 */
const colorMap: Record<AgendaColor, string> = {
  red: 'bg-[#FB2C36]',
  green: 'bg-[#00C950]',
  blue: 'bg-[#2B7FFF]',
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, name, type, color }) => {
  return (
    <div className="flex items-center gap-3 px-2 py-0 h-[54px] bg-zinc-50 rounded-[10px] border border-[#CACACA]">
      {/* Bolinha indicadora de cor */}
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colorMap[color]}`} />

      {/* Conteúdo */}
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-zinc-900">
          {time} - {name}
        </span>
        <span className="text-xs text-zinc-600">{type}</span>
      </div>
    </div>
  )
}

export default AgendaItem