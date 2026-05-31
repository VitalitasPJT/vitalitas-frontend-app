import React from 'react'

interface StudentListItemProps {
  name: string
  statusText: string
  nextEval: string
  isOnline: boolean
  avatarUrl?: string
}

/**
 * Item da lista "Alunos Recentes".
 * Exibe foto, nome, status atual e data da próxima avaliação.
 * isOnline: true = bolinha verde, false = bolinha cinza.
 */
const StudentListItem: React.FC<StudentListItemProps> = ({
  name,
  statusText,
  nextEval,
  isOnline,
  avatarUrl,
}) => {
  return (
    <div className="flex items-center gap-3 px-5 py-[17px] rounded-xl border border-[#CACACA]">
      {/* Avatar com indicador de status */}
      <div className="relative flex-shrink-0 w-12 h-12">
        <img
          src={avatarUrl ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=48`}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
        />
        <span
          className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white shadow ${
            isOnline ? 'bg-[#00C950]' : 'bg-zinc-400'
          }`}
        />
      </div>

      {/* Nome + status */}
      <div className="flex-1 flex flex-col gap-0.5 min-w-0">
        <span className="text-sm font-bold text-zinc-900 truncate">{name}</span>
        <span className="text-xs text-zinc-500 truncate">{statusText}</span>
      </div>

      {/* Próxima avaliação */}
      <div className="flex flex-col items-end gap-0.5">
        <span className="text-xs font-semibold text-zinc-700">Próx. aval.</span>
        <span className="text-xs font-medium text-[#E7000B]">{nextEval}</span>
      </div>
    </div>
  )
}

export default StudentListItem