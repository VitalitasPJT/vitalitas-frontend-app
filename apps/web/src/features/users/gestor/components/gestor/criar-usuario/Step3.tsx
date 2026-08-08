import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';
import axios from 'axios';
import type { FormData } from '../../../pages/CreateUserPage';
import { criarUsuario, criarAluno, criarInstrutor } from '../../../services/gestorService';

interface Step3Props {
  formData: Partial<FormData>;
  onBack: () => void;
}

const PERFIL_LABEL: Record<string, string> = {
  instrutor: 'Instrutor',
  aluno: 'Aluno',
  gestor: 'Gestor',
  admin: 'Administrador',
};

// Mapeamento perfil → TipoUsuario numérico do backend
// Domain.Enums.TipoUsuario: Instrutor=1, Aluno=2, Gestor=3, Administrador=4
const TIPO_USUARIO: Record<string, number> = {
  instrutor: 1,
  aluno: 2,
  gestor: 3,
  admin: 4,
};

function SummaryRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
      <p className="text-sm text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <p className="text-sm font-semibold text-black border-b border-gray-100 pb-2">{title}</p>
  );
}

export function Step3({ formData, onBack }: Step3Props) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const perfil = formData.perfil ?? '';

  // Perfis que o backend já suporta criar
  const perfilDisponivel = ['aluno', 'instrutor'].includes(perfil);

  async function handleConfirm() {
    setLoading(true);
    setError('');

    // Validação do IdAcademia — vem do contexto após atualização do backend
    if (!user?.IdAcademia) {
      setError('IdAcademia não encontrado. Faça logout e login novamente.');
      setLoading(false);
      return;
    }

    try {
      // ── Passo 1: criar o usuário base ──────────────────────────────────────
      // POST /gestor/criar-usuario → retorna { IdUsuario, Status }
      const usuarioBase = await criarUsuario({
        IdAcademia: user.IdAcademia,
        Nome: formData.nome,
        Email: formData.email,
        Senha: formData.senha,
        DataNascimento: formData.nascimento,
        Cpf: formData.cpf,
        TipoUsuario: TIPO_USUARIO[perfil] ?? 2,
        Quadra: formData.quadra ?? '',
        Rua: formData.rua,
        Bairro: formData.bairro,
        Cidade: formData.cidade,
        Estado: formData.estado,
        Cep: formData.cep,
      });

      const idUsuarioCriado: string = usuarioBase.IdUsuario;

      // ── Passo 2: vincular o perfil específico ──────────────────────────────
      if (perfil === 'aluno') {
        // POST /gestor/criar-aluno → vincula aluno com objetivo, instrutor e contrato
        await criarAluno({
          IdUsuario: idUsuarioCriado,
          IdInstrutor: '00000000-0000-0000-0000-000000000000', // TODO: seletor de instrutor
          IdContrato: '00000000-0000-0000-0000-000000000000', // TODO: seletor de contrato
          Objetivo: formData.objetivos?.join(', ') ?? '',
        });
      }

      if (perfil === 'instrutor') {
        // POST /gestor/criar-instrutor → vincula instrutor com CREF
        await criarInstrutor({
          IdUsuario: idUsuarioCriado,
          CREF: formData.cref ?? '',
        });
      }

      navigate('/user/gestor');

    } catch (err: unknown) {
      let detalhe = '';
      if (axios.isAxiosError(err)) {
        detalhe = err.response?.data?.detalhe ?? err.response?.data?.message ?? '';
      }
      setError(`Erro ao criar usuário.${detalhe ? ` Detalhe: ${detalhe}` : ' Verifique os dados e tente novamente.'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-medium text-black mb-1">Criar Novo Usuário</h2>
        <p className="text-base text-gray-500">Etapa 3: Confirmação</p>
      </div>

      <div className="px-6 py-6 flex flex-col gap-8">

        {/* Aviso */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-md px-4 py-3">
          <p className="text-sm text-yellow-800">
            Revise todas as informações antes de confirmar. Após a criação, alguns dados só poderão ser alterados pelo administrador.
          </p>
        </div>

        {/* Informações Básicas */}
        <div className="flex flex-col gap-4">
          <SectionTitle title="Informações Básicas" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SummaryRow label="Nome Completo" value={formData.nome} />
            <SummaryRow label="Perfil" value={PERFIL_LABEL[perfil] ?? perfil} />
            <SummaryRow label="Email" value={formData.email} />
            <SummaryRow label="Telefone" value={formData.telefone} />
            <SummaryRow label="CPF" value={formData.cpf} />
            <SummaryRow label="Nascimento" value={formData.nascimento} />
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col gap-4">
          <SectionTitle title="Endereço" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SummaryRow label="CEP" value={formData.cep} />
            <SummaryRow label="Quadra" value={formData.quadra} />
            <SummaryRow label="Rua" value={formData.rua} />
            <SummaryRow label="Bairro" value={formData.bairro} />
            <SummaryRow label="Cidade" value={formData.cidade} />
            <SummaryRow label="Estado" value={formData.estado} />
          </div>
        </div>

        {/* Detalhes — Aluno */}
        {perfil === 'aluno' && (
          <div className="flex flex-col gap-4">
            <SectionTitle title="Detalhes do Perfil — Aluno" />
            {(formData.objetivos?.length ?? 0) > 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Objetivos</p>
                <div className="flex flex-wrap gap-2">
                  {formData.objetivos?.map((obj) => (
                    <span key={obj} className="px-3 py-1 bg-red-50 border border-red-200 text-red-600 text-xs rounded-md font-medium">
                      {obj}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SummaryRow label="Alergias" value={formData.alergias} />
              <SummaryRow label="Cirurgias" value={formData.cirurgias} />
              <SummaryRow label="Lesões" value={formData.lesoes} />
              <SummaryRow label="Problemas de Saúde" value={formData.problemaSaude} />
              <SummaryRow label="Medicamentos" value={formData.medicamentos} />
              <SummaryRow label="Limitações" value={formData.limitacoes} />
            </div>
          </div>
        )}

        {/* Detalhes — Instrutor */}
        {perfil === 'instrutor' && (
          <div className="flex flex-col gap-4">
            <SectionTitle title="Detalhes do Perfil — Instrutor" />
            <SummaryRow label="CREF" value={formData.cref} />
          </div>
        )}

        {/* Aviso perfil não disponível */}
        {!perfilDisponivel && (
          <div className="bg-blue-50 border border-blue-200 rounded-md px-4 py-3">
            <p className="text-sm text-blue-700">
              A criação de <strong>{PERFIL_LABEL[perfil] ?? perfil}</strong> ainda não está disponível. Em breve será implementada.
            </p>
          </div>
        )}

        {/* Erro */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md px-4 py-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Botões */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onBack}
            disabled={loading}
            className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            Voltar
          </button>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate('/user/gestor')}
              disabled={loading}
              className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={loading || !perfilDisponivel}
              className="px-6 py-2.5 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 transition-colors disabled:opacity-60 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Criando...
                </>
              ) : (
                'Confirmar e Criar Usuário'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
