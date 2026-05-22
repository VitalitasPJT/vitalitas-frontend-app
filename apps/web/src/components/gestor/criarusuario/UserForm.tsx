import type { FormData } from '../../../pages/private/CriarUsuario';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

interface UserFormProps {
  step: number;
  formData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
}

export function UserForm({ step, formData, onNext, onBack }: UserFormProps) {
  if (step === 1) return <Step1 initialData={formData} onNext={onNext} />;
  if (step === 2) return <Step2 initialData={formData} onNext={onNext} onBack={onBack} />;
  if (step === 3) return <Step3 formData={formData} onBack={onBack} />;
  return null;
}
