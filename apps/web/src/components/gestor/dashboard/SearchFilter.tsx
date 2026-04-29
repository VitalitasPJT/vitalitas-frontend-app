import svgPaths from "../../../imports/svg-59b1zfc4li";

export function SearchFilter() {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Barra de Busca */}
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d={svgPaths.p107a080}
                stroke="#6A7282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
              />
              <path
                d="M14 14L11.1333 11.1333"
                stroke="#6A7282"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar por nome ou matrícula..."
            className="w-full h-9 bg-[#e5e5e5] rounded-lg pl-10 pr-3 text-sm text-[#717182] placeholder:text-[#717182] border-0 focus:outline-none focus:ring-2 focus:ring-[#ee2b47] focus:ring-opacity-50"
          />
        </div>

        {/* Filtro de Unidades */}
        <div className="relative">
          <button className="h-9 px-3 bg-[#e5e5e5] rounded-lg flex items-center gap-2 hover:bg-[#d5d5d5] transition-colors min-w-[200px] justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path
                  d={svgPaths.p36bb6c80}
                  stroke="#717182"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.33333"
                />
              </svg>
              <span className="text-sm font-medium text-[#0a0a0a]">
                Todas as Unidades
              </span>
            </div>
            <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 16 16">
              <path
                d="M4 6L8 10L12 6"
                stroke="#717182"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
