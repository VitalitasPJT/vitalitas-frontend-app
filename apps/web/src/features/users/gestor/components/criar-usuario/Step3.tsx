import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/shared/hooks/useAuth';
import { Button } from '@/shared/components/ui/Button';
import { Badge } from '@/shared/components/ui/Badge';
import { FormFeedbackMessage } from '@/shared/components/ui/FormFeedbackMessage';
import { PERFIL_LABEL } from '@/shared/constants/Roles';
import { ConstRoutes } from '@/shared/constants/Routes';
import type { FormData } from '../../pages/CreateUserPage';
import { criarUsuario, criarAluno, criarInstrutor } from '../../services/gestorService';

interface Step3Props {
  formData: Partial<FormData>;
  onBack: () => void;
  onCancel: () => void;
}

// Mapeamento perfil → TipoUsuario numérico do backend
// Domain.Enums.TipoUsuario: Instrutor=1, Aluno=2, Gestor=3, Administrador=4
const TIPO_USUARIO: Record<string, number> = {
  instrutor: 1,
  aluno:     2,
  gestor:    3,
  admin:     4,
};

function SummaryRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs text-body/70 uppercase tracking-wide">{label}</p>
      <p className="text-sm text-ink font-medium">{value}</p>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <p className="text-sm font-semibold text-ink border-b border-border pb-2">{title}</p>
  );
}

export function Step3({ formData, onBack, onCancel }: Step3Props) {
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
        IdAcademia:     user.IdAcademia,
        Nome:           formData.nome,
        Email:          formData.email,
        Senha:          formData.senha,
        DataNascimento: formData.nascimento,
        Cpf:            formData.cpf,
        TipoUsuario:    TIPO_USUARIO[perfil] ?? 2,
        Quadra:         formData.quadra ?? '',
        Rua:            formData.rua,
        Bairro:         formData.bairro,
        Cidade:         formData.cidade,
        Estado:         formData.estado,
        Cep:            formData.cep,
      });

      const idUsuarioCriado: string = usuarioBase.IdUsuario;

      // ── Passo 2: vincular o perfil específico ──────────────────────────────
      if (perfil === 'aluno') {
        // POST /gestor/criar-aluno → vincula aluno com objetivo, instrutor e contrato
        await criarAluno({
          IdUsuario:   idUsuarioCriado,
          IdInstrutor: '00000000-0000-0000-0000-000000000000', // TODO: seletor de instrutor
          IdContrato:  '00000000-0000-0000-0000-000000000000', // TODO: seletor de contrato
          Objetivo:    formData.objetivos?.join(', ') ?? '',
        });
      }

      if (perfil === 'instrutor') {
        // POST /gestor/criar-instrutor → vincula instrutor com CREF
        await criarInstrutor({
          IdUsuario: idUsuarioCriado,
          CREF:      formData.cref ?? '',
        });
      }

      navigate(ConstRoutes.GESTOR);

    } catch (err: any) {
      const detalhe = err?.response?.data?.detalhe ?? err?.response?.data?.message ?? '';
      setError(`Erro ao criar usuário.${detalhe ? ` Detalhe: ${detalhe}` : ' Verifique os dados e tente novamente.'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">

      {/* Aviso — antes div amarela solta, agora FormFeedbackMessage
          variant="warning" (mesmo componente usado pros outros dois
          avisos abaixo e pro erro). */}
      <FormFeedbackMessage variant="warning" boxed>
        Revise todas as informações antes de confirmar. Após a criação, alguns dados só poderão ser alterados pelo administrador.
      </FormFeedbackMessage>

      {/* Informações Básicas */}
      <div className="flex flex-col gap-4">
        <SectionTitle title="Informações Básicas" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SummaryRow label="Nome Completo" value={formData.nome} />
          <SummaryRow label="Perfil"        value={PERFIL_LABEL[perfil] ?? perfil} />
          <SummaryRow label="Email"         value={formData.email} />
          <SummaryRow label="Telefone"      value={formData.telefone} />
          <SummaryRow label="CPF"           value={formData.cpf} />
          <SummaryRow label="Nascimento"    value={formData.nascimento} />
        </div>
      </div>

      {/* Endereço */}
      <div className="flex flex-col gap-4">
        <SectionTitle title="Endereço" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SummaryRow label="CEP"    value={formData.cep} />
          <SummaryRow label="Quadra" value={formData.quadra} />
          <SummaryRow label="Rua"    value={formData.rua} />
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
              <p className="text-xs text-body/70 uppercase tracking-wide">Objetivos</p>
              <div className="flex flex-wrap gap-2">
                {formData.objetivos?.map((obj) => (
                  <Badge key={obj} variant="brand" size="sm">
                    {obj}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SummaryRow label="Alergias"           value={formData.alergias} />
            <SummaryRow label="Cirurgias"          value={formData.cirurgias} />
            <SummaryRow label="Lesões"             value={formData.lesoes} />
            <SummaryRow label="Problemas de Saúde" value={formData.problemaSaude} />
            <SummaryRow label="Medicamentos"       value={formData.medicamentos} />
            <SummaryRow label="Limitações"         value={formData.limitacoes} />
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
        <FormFeedbackMessage variant="info" boxed>
          A criação de <strong>{PERFIL_LABEL[perfil] ?? perfil}</strong> ainda não está disponível. Em breve será implementada.
        </FormFeedbackMessage>
      )}

      {/* Erro */}
      {error && (
        <FormFeedbackMessage variant="error" boxed>
          {error}
        </FormFeedbackMessage>
      )}

      {/* Botões — <button> cru trocado pelo Button compartilhado; spinner
          desenhado à mão trocado por Loader2 (lucide-react), mesmo ícone
          já usado em LoginForm.tsx pro mesmo propósito. */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="secondary" onClick={onBack} disabled={loading}>
          Voltar
        </Button>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onCancel} disabled={loading}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={loading || !perfilDisponivel}
            icon={loading ? <Loader2 size={16} className="animate-spin" /> : undefined}
            iconPosition="left"
          >
            {loading ? 'Criando...' : 'Confirmar e Criar Usuário'}
          </Button>
        </div>
      </div>

    </div>
  );
}
