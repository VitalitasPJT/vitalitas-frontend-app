import svgPaths from "../../../imports/svg-59b1zfc4li";

export function UsersTable() {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
      {/* Header do Card */}
      <div className="px-6 py-6 border-b border-[rgba(0,0,0,0.1)]">
        <h3 className="text-base font-medium text-[#0a0a0a]">
          Usuários Cadastrados (0)
        </h3>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                Usuário
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                Matrícula
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                Unidade
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                Status
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                Perfil
              </th>
              <th className="text-right px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-6 py-16 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#f3f3f5] flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 16 16">
                      <path
                        d={svgPaths.p32887f80}
                        stroke="#6A7282"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                      <path
                        d={svgPaths.p3694d280}
                        stroke="#6A7282"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                      <path
                        d={svgPaths.p1f197700}
                        stroke="#6A7282"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                      <path
                        d={svgPaths.p3bf3e100}
                        stroke="#6A7282"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-[#0a0a0a]">
                      Nenhum usuário encontrado
                    </p>
                    <p className="text-sm text-[#6a7282]">
                      Clique em "Criar novo usuário" para adicionar o primeiro membro
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="px-6 py-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <p className="text-sm text-[#6a7282]">
          Mostrando 0 a 0 de 0 usuários
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm text-[#6a7282] hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            ‹ Anterior
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-[#ee2b47] text-white rounded text-sm font-medium">
            1
          </button>
          <button className="px-3 py-1 text-sm text-[#6a7282] hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Próxima ›
          </button>
        </div>
      </div>
    </div>
  );
}
