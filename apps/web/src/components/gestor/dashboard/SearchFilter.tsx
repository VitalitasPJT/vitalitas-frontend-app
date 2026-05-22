interface SearchFilterProps {
  onSearch?: (term: string) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Barra de Busca */}
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="#6A7282" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar por nome ou e-mail..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full h-9 bg-[#e5e5e5] rounded-lg pl-10 pr-3 text-sm text-[#717182] placeholder:text-[#717182] border-0 focus:outline-none focus:ring-2 focus:ring-[#ee2b47] focus:ring-opacity-50"
          />
        </div>

        {/* Filtro de Status */}
        <div className="relative">
          <button className="h-9 px-3 bg-[#e5e5e5] rounded-lg flex items-center gap-2 hover:bg-[#d5d5d5] transition-colors min-w-[200px] justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-medium text-[#0a0a0a]">Todos os Status</span>
            </div>
            <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
