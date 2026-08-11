import { useState } from 'react';
import { Button } from '@/shared/components/ui/Button';
import { FormField } from '@/shared/components/inputs/FormField';
import { Checkbox } from '@/shared/components/inputs/Checkbox';
import { ToggleChipGroup } from '@/shared/components/ui/ToggleChipGroup';
import { PERFIL_LABEL } from '@/shared/constants/Roles';
import type { FormData } from '../../pages/CreateUserPage';

interface Step2Props {
  initialData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}

// ── Objetivos disponíveis para aluno ──────────────────────────────────────────
const OBJETIVOS = [
  'Perda de Peso',
  'Ganho de Massa Muscular',
  'Condicionamento Físico',
  'Flexibilidade e Mobilidade',
  'Saúde e Bem-estar',
  'Preparação Esportiva',
];

// ── Aluno ─────────────────────────────────────────────────────────────────────
interface AlunoState {
  objetivos: string[];
  alergias: string;
  cirurgias: string;
  lesoes: string;
  problemaSaude: string;
  medicamentos: string;
  limitacoes: string;
}

interface AlunoErrors {
  objetivos?: string;
}

function Step2Aluno({
  initialData,
  onNext,
  onBack,
}: {
  initialData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}) {
  const [form, setForm] = useState<AlunoState>({
    objetivos: initialData.objetivos ?? [],
    alergias: initialData.alergias ?? '',
    cirurgias: initialData.cirurgias ?? '',
    lesoes: initialData.lesoes ?? '',
    problemaSaude: initialData.problemaSaude ?? '',
    medicamentos: initialData.medicamentos ?? '',
    limitacoes: initialData.limitacoes ?? '',
  });

  const [errors, setErrors] = useState<AlunoErrors>({});

  function toggleObjetivo(obj: string) {
    setForm((prev) => ({
      ...prev,
      objetivos: prev.objetivos.includes(obj)
        ? prev.objetivos.filter((o) => o !== obj)
        : [...prev.objetivos, obj],
    }));
    setErrors({});
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): boolean {
    if (form.objetivos.length === 0) {
      setErrors({ objetivos: 'Selecione ao menos um objetivo.' });
      return false;
    }
    return true;
  }

  function handleContinue() {
    if (validate()) onNext(form);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Objetivos — grid manual trocado por ToggleChipGroup (novo
          componente compartilhado, extraído deste mesmo padrão). */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-ink">Objetivos na Academia</p>
        <p className="text-xs text-body">Selecione os objetivos que o aluno deseja alcançar</p>
        <ToggleChipGroup
          options={OBJETIVOS}
          selected={form.objetivos}
          onToggle={toggleObjetivo}
          error={errors.objetivos}
        />
      </div>

      {/* Ficha Médica — inputs/textarea manuais trocados por FormField,
          incluindo o novo type="textarea" (elimina o TextareaField local
          que existia só neste arquivo). */}
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-ink">Ficha Médica</p>
        <p className="text-xs text-body">Marque as condições que se aplicam ao aluno e forneça detalhes.</p>

        <FormField
          label="Alergias"
          name="alergias"
          type="textarea"
          placeholder="Descreva suas alergias (medicamentos, alimentos, etc.)"
          value={form.alergias}
          onChange={handleTextChange}
        />

        <FormField
          label="Cirurgias"
          name="cirurgias"
          type="textarea"
          placeholder="Descreva as cirurgias realizadas e quando foram feitas"
          value={form.cirurgias}
          onChange={handleTextChange}
        />

        <div className="flex flex-col gap-4">
          {[
            { name: 'lesoes', label: 'Lesões' },
            { name: 'problemaSaude', label: 'Problemas de Saúde' },
            { name: 'medicamentos', label: 'Medicamentos em Uso' },
            { name: 'limitacoes', label: 'Limitações Físicas' },
          ].map(({ name, label }) => (
            <FormField
              key={name}
              label={label}
              name={name}
              type="text"
              placeholder={`Descreva ${label.toLowerCase()} se houver`}
              value={form[name as keyof AlunoState] as string}
              onChange={handleTextChange}
            />
          ))}
        </div>

        <p className="text-xs text-body/70 italic">
          Todas as informações médicas são confidenciais e serão utilizadas apenas para garantir a segurança e eficiência do treinamento do aluno.
        </p>
      </div>

      {/* Botões — sem Cancelar aqui (ver Step3.tsx). */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="secondary" onClick={onBack}>
          Voltar
        </Button>
        <Button variant="primary" onClick={handleContinue}>
          Continuar para Etapa 3
        </Button>
      </div>
    </div>
  );
}

// ── Instrutor ─────────────────────────────────────────────────────────────────
interface InstrutorState {
  cref: string;
  crefConfirmado: boolean;
}

interface InstrutorErrors {
  cref?: string;
  crefConfirmado?: string;
}

function Step2Instrutor({
  initialData,
  onNext,
  onBack,
}: {
  initialData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}) {
  const [form, setForm] = useState<InstrutorState>({
    cref: initialData.cref ?? '',
    crefConfirmado: initialData.crefConfirmado ?? false,
  });

  const [errors, setErrors] = useState<InstrutorErrors>({});

  function validate(): boolean {
    const newErrors: InstrutorErrors = {};
    if (!form.cref.trim()) newErrors.cref = 'Número do CREF é obrigatório.';
    if (!form.crefConfirmado) newErrors.crefConfirmado = 'Confirme o registro no CREF.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleContinue() {
    if (validate()) onNext(form);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-ink">Registro Profissional</p>
        <p className="text-xs text-body">Informe o número de registro no Conselho Regional de Educação Física.</p>
      </div>

      {/* CREF — antes input manual duplicando o que FormField já resolve;
          agora usa FormField direto. */}
      <FormField
        label="Número do CREF"
        name="cref"
        type="text"
        placeholder="0000-G/UF (ex: 0000-G/SP)"
        value={form.cref}
        onChange={(e) => {
          setForm((prev) => ({ ...prev, cref: e.target.value }));
          if (errors.cref) setErrors((prev) => ({ ...prev, cref: undefined }));
        }}
        error={errors.cref}
      />

      {/* Confirmação CREF — checkbox manual trocado pelo componente
          compartilhado Checkbox. */}
      <Checkbox
        id="crefConfirmado"
        checked={form.crefConfirmado}
        onChange={(e) => {
          setForm((prev) => ({ ...prev, crefConfirmado: e.target.checked }));
          if (errors.crefConfirmado) setErrors((prev) => ({ ...prev, crefConfirmado: undefined }));
        }}
        label="O CREF (Conselho Regional de Educação Física) é obrigatório para todos os profissionais de Educação Física que atuam na academia. Certifico-me de que o registro está ativo e regular."
        error={errors.crefConfirmado}
      />

      {/* Caso não encontre o CREF */}
      <div className="flex flex-col gap-1 bg-surface-alt dark:bg-surface-muted rounded-md p-4 border border-border">
        <p className="text-sm font-medium text-ink">Caso não encontre o CREF:</p>
        <ul className="list-disc list-inside text-xs text-body flex flex-col gap-1">
          <li>Não é um profissional na área da Saúde Física</li>
          <li>Não têm CREF de outro estado ou país profissional</li>
          <li>Não confirma dados do registro profissional</li>
        </ul>
      </div>

      {/* Botões — sem Cancelar aqui (ver Step3.tsx). */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="secondary" onClick={onBack}>
          Voltar
        </Button>
        <Button variant="primary" onClick={handleContinue}>
          Continuar para Etapa 3
        </Button>
      </div>
    </div>
  );
}

// ── Perfis sem etapa 2 (gestor / admin) ──────────────────────────────────────
function Step2Simple({
  perfil,
  onNext,
  onBack,
}: {
  perfil: string;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}) {

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-4 text-center py-10">
        <p className="text-body text-sm">
          Nenhuma informação adicional é necessária para o perfil <strong className="text-ink">{PERFIL_LABEL[perfil] ?? perfil}</strong>.
        </p>
        <p className="text-body/70 text-xs">Clique em Continuar para revisar os dados antes de criar o usuário.</p>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="secondary" onClick={onBack}>
          Voltar
        </Button>
        <Button variant="primary" onClick={() => onNext({})}>
          Continuar para Etapa 3
        </Button>
      </div>
    </div>
  );
}

// ── Step2 router ──────────────────────────────────────────────────────────────
export function Step2({ initialData, onNext, onBack }: Step2Props) {
  const perfil = initialData.perfil ?? '';

  if (perfil === 'aluno') return <Step2Aluno initialData={initialData} onNext={onNext} onBack={onBack} />;
  if (perfil === 'instrutor') return <Step2Instrutor initialData={initialData} onNext={onNext} onBack={onBack} />;
  return <Step2Simple perfil={perfil} onNext={onNext} onBack={onBack} />;
}
