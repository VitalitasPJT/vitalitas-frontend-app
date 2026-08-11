import { Search, Calendar, SlidersHorizontal } from 'lucide-react';

/**
 * Renomeado de SearchBar.tsx para ActivitySearchBar.tsx. O nome genérico
 * colidia (não em código, mas em intenção) com SearchFilter.tsx, que já
 * existe na tela de Usuários e resolve um filtro diferente (Status, com
 * onSearch conectado). Os dois fazem parte da mesma família de "barra de
 * busca + filtros por tela", mas não são o mesmo componente — cada tela
 * tem filtros próprios (Data/Filtros aqui vs. Status lá) — por isso não
 * foram unificados em um só componente compartilhado.
 *
 * Dark mode adicionado (tokens shared/tailwind.css), mesmo padrão do
 * SearchFilter.tsx.
 *
 * TODO: assim como SearchFilter.tsx tem onSearch conectado à UsersTable,
 * este componente ainda não está conectado a nada — o input e os botões
 * são apenas visuais. Fica pendente pra quando a tela de Atividades tiver
 * dados reais vindos do backend (ver TODOs em ActivityList.tsx/StatsGrid.tsx).
 */
export function ActivitySearchBar() {
  return (
    <div className="
      bg-white dark:bg-[#1c1c1f]
      rounded-xl border border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
      p-4 mb-6 transition-colors duration-300
    ">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#a1a1aa]" />
          <input
            type="text"
            placeholder="Buscar por nome ou e-mail do usuário..."
            className="
              w-full pl-10 pr-4 py-2.5
              bg-[#fafafa] dark:bg-[#2c2c30]
              border border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
              rounded-lg text-sm text-[#18181b] dark:text-[#e4e4e7]
              placeholder:text-[#a1a1aa] dark:placeholder:text-[#71717a]
              focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand
              transition-colors
            "
          />
        </div>
        <button className="
          flex items-center justify-center gap-2 px-4 py-2.5
          bg-[#fafafa] dark:bg-[#2c2c30]
          border border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
          rounded-lg text-sm font-medium text-[#52525c] dark:text-[#a1a1aa]
          hover:bg-gray-100 dark:hover:bg-[#3c3c40] transition-colors
        ">
          <Calendar className="size-4" />
          <span className="hidden sm:inline">Data</span>
        </button>
        <button className="
          flex items-center justify-center gap-2 px-4 py-2.5
          bg-[#fafafa] dark:bg-[#2c2c30]
          border border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
          rounded-lg text-sm font-medium text-[#52525c] dark:text-[#a1a1aa]
          hover:bg-gray-100 dark:hover:bg-[#3c3c40] transition-colors
        ">
          <SlidersHorizontal className="size-4" />
          <span className="hidden sm:inline">Filtros</span>
        </button>
      </div>
    </div>
  );
}
