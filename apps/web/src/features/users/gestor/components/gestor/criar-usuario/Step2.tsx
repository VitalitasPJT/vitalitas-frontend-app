import { useState } from 'react';
import type { FormData } from '../../../pages/CreateUserPage';

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

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
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
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-medium text-black mb-1">Criar Novo Usuário</h2>
        <p className="text-base text-gray-500">Etapa 2: Detalhes do Perfil — Aluno</p>
      </div>

      <div className="px-6 py-6 flex flex-col gap-8">
        {/* Objetivos */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-black">Objetivos na Academia</p>
          <p className="text-xs text-gray-500">Selecione os objetivos que o aluno deseja alcançar</p>
          <div className="grid grid-cols-2 gap-3">
            {OBJETIVOS.map((obj) => (
              <button
                key={obj}
                type="button"
                onClick={() => toggleObjetivo(obj)}
                className={`px-4 py-3 rounded-md border text-sm font-medium text-left transition-colors ${
                  form.objetivos.includes(obj)
                    ? 'bg-red-50 border-red-500 text-red-600'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {obj}
              </button>
            ))}
          </div>
          {errors.objetivos && <p className="text-xs text-red-500">{errors.objetivos}</p>}
        </div>

        {/* Ficha Médica */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-black">Ficha Médica</p>
          <p className="text-xs text-gray-500">Marque as condições que se aplicam ao aluno e forneça detalhes.</p>

          {/* Alergias */}
          <TextareaField
            label="Alergias"
            name="alergias"
            value={form.alergias}
            onChange={handleTextChange}
            placeholder="Descreva suas alergias (medicamentos, alimentos, etc.)"
          />

          {/* Cirurgias */}
          <TextareaField
            label="Cirurgias"
            name="cirurgias"
            value={form.cirurgias}
            onChange={handleTextChange}
            placeholder="Descreva as cirurgias realizadas e quando foram feitas"
          />

          {/* Checkboxes opcionais */}
          <div className="flex flex-col gap-2">
            {[
              { name: 'lesoes', label: 'Lesões' },
              { name: 'problemaSaude', label: 'Problemas de Saúde' },
              { name: 'medicamentos', label: 'Medicamentos em Uso' },
              { name: 'limitacoes', label: 'Limitações Físicas' },
            ].map(({ name, label }) => (
              <div key={name} className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={form[name as keyof AlunoState] as string}
                  onChange={handleTextChange}
                  placeholder={`Descreva ${label.toLowerCase()} se houver`}
                  className="w-full h-11 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 italic">
            Todas as informações médicas são confidenciais e serão utilizadas apenas para garantir a segurança e eficiência do treinamento do aluno.
          </p>
        </div>

        {/* Botões */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors"
          >
            Voltar
          </button>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="px-6 py-2.5 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 transition-colors"
            >
              Continuar para Etapa 3
            </button>
          </div>
        </div>
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
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-medium text-black mb-1">Criar Novo Usuário</h2>
        <p className="text-base text-gray-500">Etapa 2: Detalhes do Perfil — Instrutor</p>
      </div>

      <div className="px-6 py-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-black">Registro Profissional</p>
          <p className="text-xs text-gray-500">Informe o número de registro no Conselho Regional de Educação Física.</p>
        </div>

        {/* CREF */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-black">Número do CREF</label>
          <input
            type="text"
            name="cref"
            value={form.cref}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, cref: e.target.value }));
              if (errors.cref) setErrors((prev) => ({ ...prev, cref: undefined }));
            }}
            placeholder="0000-G/UF (ex: 0000-G/SP)"
            className={`w-full h-11 px-3 py-2 bg-white border rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              errors.cref ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.cref && <p className="text-xs text-red-500">{errors.cref}</p>}
        </div>

        {/* Confirmação CREF */}
        <div className="flex flex-col gap-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.crefConfirmado}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, crefConfirmado: e.target.checked }));
                if (errors.crefConfirmado) setErrors((prev) => ({ ...prev, crefConfirmado: undefined }));
              }}
              className="mt-0.5 h-4 w-4 accent-red-500"
            />
            <span className="text-sm text-gray-600">
              O CREF (Conselho Regional de Educação Física) é obrigatório para todos os profissionais de Educação Física que atuam na academia. Certifico-me de que o registro está ativo e regular.
            </span>
          </label>
          {errors.crefConfirmado && <p className="text-xs text-red-500">{errors.crefConfirmado}</p>}
        </div>

        {/* Caso não encontre o CREF */}
        <div className="flex flex-col gap-1 bg-gray-50 rounded-md p-4 border border-gray-200">
          <p className="text-sm font-medium text-gray-700">Caso não encontre o CREF:</p>
          <ul className="list-disc list-inside text-xs text-gray-500 flex flex-col gap-1">
            <li>Não é um profissional na área da Saúde Física</li>
            <li>Não têm CREF de outro estado ou país profissional</li>
            <li>Não confirma dados do registro profissional</li>
          </ul>
        </div>

        {/* Botões */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors"
          >
            Voltar
          </button>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="px-6 py-2.5 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 transition-colors"
            >
              Continuar para Etapa 3
            </button>
          </div>
        </div>
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
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-medium text-black mb-1">Criar Novo Usuário</h2>
        <p className="text-base text-gray-500">Etapa 2: Detalhes do Perfil — {perfil}</p>
      </div>
      <div className="px-6 py-10 flex flex-col items-center gap-4 text-center">
        <p className="text-gray-500 text-sm">
          Nenhuma informação adicional é necessária para o perfil <strong>{perfil}</strong>.
        </p>
        <p className="text-gray-400 text-xs">Clique em Continuar para revisar os dados antes de criar o usuário.</p>
      </div>
      <div className="px-6 pb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={() => onNext({})}
          className="px-6 py-2.5 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 transition-colors"
        >
          Continuar para Etapa 3
        </button>
      </div>
    </div>
  );
}

// ── Textarea helper ───────────────────────────────────────────────────────────
function TextareaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={3}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
      />
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
