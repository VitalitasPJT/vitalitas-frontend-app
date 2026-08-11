import { PERFIL_LABEL } from '@/shared/constants/Roles';
import type { FormData } from '../../pages/CreateUserPage';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

interface UserFormProps {
  step: number;
  formData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
  onCancel: () => void;
}

function getStepSubtitle(step: number, perfil?: string): string {
  if (step === 1) return 'Etapa 1: Informações Básicas';
  if (step === 2) {
    if (perfil === 'aluno')     return 'Etapa 2: Detalhes do Perfil — Aluno';
    if (perfil === 'instrutor') return 'Etapa 2: Detalhes do Perfil — Instrutor';
    return `Etapa 2: Detalhes do Perfil — ${PERFIL_LABEL[perfil ?? ''] ?? perfil ?? ''}`;
  }
  if (step === 3) return 'Etapa 3: Confirmação';
  return '';
}

/**
 * Dono do card + cabeçalho "Criar Novo Usuário / Etapa X" (ver histórico
 * de decisão nas revisões anteriores). Dark mode adicionado via tokens
 * (bg-surface, border-border, text-ink, text-body).
 */
export function UserForm({ step, formData, onNext, onBack, onCancel }: UserFormProps) {
  return (
    <div className="w-full bg-surface rounded-xl shadow-lg border border-border">
      <div className="px-6 py-6 border-b border-border">
        <h2 className="text-2xl font-medium text-ink mb-1">Criar Novo Usuário</h2>
        <p className="text-base text-body">{getStepSubtitle(step, formData.perfil)}</p>
      </div>
      <div className="px-6 py-6">
        {step === 1 && <Step1 initialData={formData} onNext={onNext} />}
        {step === 2 && <Step2 initialData={formData} onNext={onNext} onBack={onBack} />}
        {step === 3 && <Step3 formData={formData} onBack={onBack} onCancel={onCancel} />}
      </div>
    </div>
  );
}
