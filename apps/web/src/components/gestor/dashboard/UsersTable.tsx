import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { listarAlunos } from '../../../services/gestorService';
import type { AlunoItem } from '../../../services/gestorService';

const ITENS_POR_PAGINA = 10;

const STATUS_STYLE: Record<string, string> = {
  pago:      'bg-green-100 text-green-700 border border-green-200',
  pendente:  'bg-yellow-100 text-yellow-700 border border-yellow-200',
  vencido:   'bg-red-100 text-red-700 border border-red-200',
};

function statusLabel(status: string): string {
  const map: Record<string, string> = {
    pago:     'Pago',
    pendente: 'Pendente',
    vencido:  'Vencido',
  };
  return map[status?.toLowerCase()] ?? status ?? '—';
}

function statusStyle(status: string): string {
  return STATUS_STYLE[status?.toLowerCase()] ?? 'bg-gray-100 text-gray-600 border border-gray-200';
}

interface UsersTableProps {
  searchTerm?: string;
}

export function UsersTable({ searchTerm = '' }: UsersTableProps) {
  const { user } = useAuth();

  const [alunos, setAlunos] = useState<AlunoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    if (!user?.IdAcademia) return;

    setLoading(true);
    setError('');

    listarAlunos(user.IdAcademia)
      .then((res) => setAlunos(res.Alunos ?? []))
      .catch(() => setError('Erro ao carregar usuários.'))
      .finally(() => setLoading(false));
  }, [user?.IdAcademia]);

  // Filtro por nome ou email
  const alunosFiltrados = alunos.filter((a) => {
    if (!searchTerm) return true;
    const termo = searchTerm.toLowerCase();
    return (
      a.Nome?.toLowerCase().includes(termo) ||
      a.Email?.toLowerCase().includes(termo)
    );
  });

  // Paginação
  const totalPaginas = Math.max(1, Math.ceil(alunosFiltrados.length / ITENS_POR_PAGINA));
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const alunosPagina = alunosFiltrados.slice(inicio, inicio + ITENS_POR_PAGINA);

  // Resetar página ao filtrar
  useEffect(() => { setPagina(1); }, [searchTerm]);

  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 border-b border-[rgba(0,0,0,0.1)]">
        <h3 className="text-base font-medium text-[#0a0a0a]">
          Usuários Cadastrados ({alunosFiltrados.length})
        </h3>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              {['Usuário', 'Email', 'Objetivo', 'Status Pagamento', 'Ações'].map((col) => (
                <th key={col} className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a]">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Loading */}
            {loading && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin h-8 w-8 text-[#ee2b47]" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <p className="text-sm text-[#6a7282]">Carregando usuários...</p>
                  </div>
                </td>
              </tr>
            )}

            {/* Erro */}
            {!loading && error && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <p className="text-sm text-red-500">{error}</p>
                </td>
              </tr>
            )}

            {/* Vazio */}
            {!loading && !error && alunosPagina.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#f3f3f5] flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9" cy="7" r="4" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-medium text-[#0a0a0a]">
                        {searchTerm ? 'Nenhum resultado encontrado' : 'Nenhum usuário cadastrado'}
                      </p>
                      <p className="text-sm text-[#6a7282]">
                        {searchTerm
                          ? `Nenhum aluno corresponde a "${searchTerm}"`
                          : 'Clique em "Criar novo usuário" para adicionar o primeiro membro'}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}

            {/* Dados */}
            {!loading && !error && alunosPagina.map((aluno) => (
              <tr key={aluno.IdAluno} className="border-b border-[rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fee2e2] flex items-center justify-center shrink-0">
                      <span className="text-[#ee2b47] text-xs font-bold">
                        {aluno.Nome?.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase() ?? '?'}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#0a0a0a]">{aluno.Nome}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#6a7282]">{aluno.Email}</td>
                <td className="px-6 py-4 text-sm text-[#6a7282]">{aluno.Objetivo || '—'}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${statusStyle(aluno.StatusPagamento)}`}>
                    {statusLabel(aluno.StatusPagamento)}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-[#ee2b47] hover:underline font-medium cursor-pointer">
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="px-6 py-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <p className="text-sm text-[#6a7282]">
          {alunosFiltrados.length === 0
            ? 'Nenhum usuário'
            : `Mostrando ${inicio + 1} a ${Math.min(inicio + ITENS_POR_PAGINA, alunosFiltrados.length)} de ${alunosFiltrados.length} usuários`}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPagina((p) => Math.max(1, p - 1))}
            disabled={pagina === 1}
            className="px-3 py-1 text-sm text-[#6a7282] hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ‹ Anterior
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPagina(p)}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                p === pagina
                  ? 'bg-[#ee2b47] text-white'
                  : 'text-[#6a7282] hover:bg-gray-100'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
            disabled={pagina === totalPaginas}
            className="px-3 py-1 text-sm text-[#6a7282] hover:text-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima ›
          </button>
        </div>
      </div>
    </div>
  );
}
