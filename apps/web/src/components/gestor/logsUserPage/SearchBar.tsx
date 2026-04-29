import { Search, Calendar, SlidersHorizontal } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="bg-white rounded-xl border border-[#e4e4e7] p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#a1a1aa]" />
          <input
            type="text"
            placeholder="Buscar por nome ou e-mail do usuário..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#fafafa] border border-[#e4e4e7] rounded-lg text-sm text-[#18181b] placeholder:text-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#c70036]/20 focus:border-[#c70036] transition-colors"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#fafafa] border border-[#e4e4e7] rounded-lg text-sm font-medium text-[#52525c] hover:bg-gray-100 transition-colors">
          <Calendar className="size-4" />
          <span className="hidden sm:inline">Data</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#fafafa] border border-[#e4e4e7] rounded-lg text-sm font-medium text-[#52525c] hover:bg-gray-100 transition-colors">
          <SlidersHorizontal className="size-4" />
          <span className="hidden sm:inline">Filtros</span>
        </button>
      </div>
    </div>
  );
}
