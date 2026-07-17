import { useEffect, useState } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import { listarAlunos } from '../../../services/gestorService';
import type { AlunoItem } from '../../../services/gestorService';

const ITENS_POR_PAGINA = 10;

function statusStyle(status: string): string {
  const s = status?.toLowerCase();
  if (s === 'pago')     return 'bg-green-100 dark:bg-[rgba(0,201,80,0.15)] text-green-700 dark:text-[#00c950] border border-green-200 dark:border-[rgba(0,201,80,0.2)]';
  if (s === 'pendente') return 'bg-yellow-100 dark:bg-[rgba(255,193,7,0.15)] text-yellow-700 dark:text-[#ffc107] border border-yellow-200 dark:border-[rgba(255,193,7,0.2)]';
  if (s === 'vencido')  return 'bg-red-100 dark:bg-[rgba(251,44,54,0.15)] text-red-700 dark:text-[#fb2c36] border border-red-200 dark:border-[rgba(251,44,54,0.2)]';
  return 'bg-gray-100 dark:bg-[#2c2c30] text-gray-600 dark:text-[#71717a] border border-gray-200 dark:border-[rgba(255,255,255,0.06)]';
}

function statusLabel(status: string): string {
  const map: Record<string, string> = { pago: 'Ativo', pendente: 'Pendente', vencido: 'Inativo' };
  return map[status?.toLowerCase()] ?? status ?? '—';
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
    if (!user?.IdAcademia) { setLoading(false); return; }
    setLoading(true);
    listarAlunos(user.IdAcademia)
      .then((res) => setAlunos(res.Alunos ?? []))
      .catch(() => setError('Erro ao carregar usuários.'))
      .finally(() => setLoading(false));
  }, [user?.IdAcademia]);

  const alunosFiltrados = alunos.filter((a) => {
    if (!searchTerm) return true;
    const t = searchTerm.toLowerCase();
    return a.Nome?.toLowerCase().includes(t) || a.Email?.toLowerCase().includes(t);
  });

  const totalPaginas = Math.max(1, Math.ceil(alunosFiltrados.length / ITENS_POR_PAGINA));
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const alunosPagina = alunosFiltrados.slice(inicio, inicio + ITENS_POR_PAGINA);

  useEffect(() => { setPagina(1); }, [searchTerm]);

  return (
    <div className="
      bg-white dark:bg-[#1c1c1f]
      rounded-[14px]
      border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.06)]
      overflow-hidden transition-colors duration-300
    ">
      {/* Header */}
      <div className="px-6 py-6 border-b border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.06)]">
        <h3 className="text-base font-medium text-[#0a0a0a] dark:text-[#e4e4e7]">
          Usuários Cadastrados ({alunosFiltrados.length})
        </h3>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.06)]">
              {['Usuário', 'Email', 'Objetivo', 'Status', 'Ações'].map((col) => (
                <th key={col} className="text-left px-6 py-3 text-sm font-medium text-[#0a0a0a] dark:text-[#71717a]">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin h-8 w-8 text-[#ee2b47]" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <p className="text-sm text-[#6a7282] dark:text-[#71717a]">Carregando usuários...</p>
                  </div>
                </td>
              </tr>
            )}

            {!loading && error && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <p className="text-sm text-red-500">{error}</p>
                </td>
              </tr>
            )}

            {!loading && !error && alunosPagina.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#f3f3f5] dark:bg-[#2c2c30] flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9" cy="7" r="4" stroke="#6A7282" strokeWidth="2" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-medium text-[#0a0a0a] dark:text-[#e4e4e7]">
                        {searchTerm ? 'Nenhum resultado encontrado' : 'Nenhum usuário cadastrado'}
                      </p>
                      <p className="text-sm text-[#6a7282] dark:text-[#71717a]">
                        {searchTerm
                          ? `Nenhum aluno corresponde a "${searchTerm}"`
                          : 'Clique em "Criar novo usuário" para adicionar o primeiro membro'}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}

            {!loading && !error && alunosPagina.map((aluno) => (
              <tr key={aluno.IdAluno}
                className="border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.04)] hover:bg-gray-50 dark:hover:bg-[#2c2c30] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fee2e2] dark:bg-[rgba(238,43,71,0.2)] flex items-center justify-center shrink-0">
                      <span className="text-[#ee2b47] text-xs font-bold">
                        {aluno.Nome?.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase() ?? '?'}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-[#e4e4e7]">{aluno.Nome}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#6a7282] dark:text-[#71717a]">{aluno.Email}</td>
                <td className="px-6 py-4 text-sm text-[#6a7282] dark:text-[#71717a]">{aluno.Objetivo || '—'}</td>
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
      <div className="px-6 py-4 border-t border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <p className="text-sm text-[#6a7282] dark:text-[#71717a]">
          {alunosFiltrados.length === 0
            ? 'Nenhum usuário'
            : `Mostrando ${inicio + 1} a ${Math.min(inicio + ITENS_POR_PAGINA, alunosFiltrados.length)} de ${alunosFiltrados.length} usuários`}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPagina((p) => Math.max(1, p - 1))}
            disabled={pagina === 1}
            className="px-3 py-1 text-sm text-[#6a7282] dark:text-[#71717a] hover:text-[#0a0a0a] dark:hover:text-[#e4e4e7] disabled:opacity-50 disabled:cursor-not-allowed"
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
                  : 'text-[#6a7282] dark:text-[#71717a] hover:bg-gray-100 dark:hover:bg-[#2c2c30]'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
            disabled={pagina === totalPaginas}
            className="px-3 py-1 text-sm text-[#6a7282] dark:text-[#71717a] hover:text-[#0a0a0a] dark:hover:text-[#e4e4e7] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima ›
          </button>
        </div>
      </div>
    </div>
  );
}
