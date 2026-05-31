import React from 'react'

interface DayData {
  label: string   // 'Dom', 'Seg', 'Ter'...
  day: number
  hasEvent: boolean
  isToday: boolean
}

interface CalendarStripProps {
  days: DayData[]
}

/**
 * Mini calendário horizontal semanal.
 * O dia atual recebe o fundo vermelho (gradiente da marca).
 * Dias com evento recebem um ponto indicador.
 */
const CalendarStrip: React.FC<CalendarStripProps> = ({ days }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-1">
      {days.map((d) => (
        <div
          key={d.day}
          className={`flex-shrink-0 w-16 h-[86px] flex flex-col items-center justify-start pt-3.5 gap-1 rounded-xl border-2 relative transition-all ${
            d.isToday
              ? 'border-[#E7000B] shadow-md text-white'
              : 'border-zinc-200 text-zinc-900'
          }`}
          style={
            d.isToday
              ? { background: 'linear-gradient(135deg, #FB2C36 0%, #E7000B 100%)' }
              : { background: 'white' }
          }
        >
          {/* Nome do dia */}
          <span
            className={`text-xs font-semibold ${
              d.isToday ? 'text-white' : 'text-zinc-500'
            }`}
          >
            {d.label}
          </span>

          {/* Número do dia */}
          <span
            className={`text-xl font-bold ${
              d.isToday ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {d.day}
          </span>

          {/* Ponto indicador de evento */}
          {d.hasEvent && (
            <span
              className={`absolute bottom-2 w-1.5 h-1.5 rounded-full ${
                d.isToday ? 'bg-white' : 'bg-[#FB2C36]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default CalendarStrip