import { UserX } from 'lucide-react';

export function ActivityList() {
  // TODO: Buscar lista de atividades do backend via GET
  // const { activities } = await fetch('/api/activities');
  // const hasActivities = activities && activities.length > 0;
  
  return (
    <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#e4e4e7]">
        <h2 className="text-base font-semibold text-[#18181b]">
          Atividades Recentes (0)
        </h2>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="size-16 rounded-full bg-[#fafafa] flex items-center justify-center mb-4">
          <UserX className="size-8 text-[#a1a1aa]" />
        </div>
        <h3 className="text-lg font-semibold text-[#18181b] mb-2">
          Nenhum aluno encontrado
        </h3>
        <p className="text-sm text-[#71717a] text-center max-w-sm">
          A lista de atividades está vazia. As atividades dos usuários aparecerão aqui
          quando forem realizadas no sistema.
        </p>
      </div>

      {/* 
        TODO: Quando houver dados do backend, renderizar lista de atividades:
        {hasActivities && activities.map(activity => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      */}

      {/* Footer - Pagination (disabled) */}
      <div className="px-6 py-4 border-t border-[#e4e4e7] flex items-center justify-between">
        <p className="text-sm text-[#71717a]">Mostrando 0 de 0 atividades</p>
        <div className="flex items-center gap-2">
          <button
            disabled
            className="px-3 py-1.5 text-sm font-medium text-[#a1a1aa] bg-[#fafafa] border border-[#e4e4e7] rounded-lg cursor-not-allowed"
          >
            1
          </button>
          <button
            disabled
            className="px-3 py-1.5 text-sm font-medium text-[#a1a1aa] bg-[#fafafa] border border-[#e4e4e7] rounded-lg cursor-not-allowed"
          >
            2
          </button>
          <button
            disabled
            className="px-3 py-1.5 text-sm font-medium text-[#a1a1aa] bg-[#fafafa] border border-[#e4e4e7] rounded-lg cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}