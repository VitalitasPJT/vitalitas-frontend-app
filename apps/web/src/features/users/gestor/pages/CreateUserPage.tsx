import { useState } from 'react';
import { DashboardLayout } from '@/shared/components/dashboard/DashboardLayout';
import { StepIndicator } from '../components/criar-usuario/StepIndicator';
import { UserForm } from '../components/criar-usuario/UserForm';

export interface FormData {
  // Etapa 1
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  nascimento: string;
  perfil: string;
  // Endereço separado
  quadra: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  // Etapa 2 — aluno
  objetivos?: string[];
  alergias?: string;
  cirurgias?: string;
  lesoes?: string;
  problemaSaude?: string;
  medicamentos?: string;
  limitacoes?: string;
  // Etapa 2 — instrutor (futuro)
  cref?: string;
  crefConfirmado?: boolean;
}

const STEPS_POR_PERFIL: Record<string, number[]> = {
  admin:     [1, 3],
  gestor:    [1, 3],
  instrutor: [1, 2, 3],
  aluno:     [1, 2, 3],
};

const STEPS_PADRAO = [1, 2, 3];

/**
 * Antes tinha layout próprio (ml-[88px] pt-[109px]) tentando simular
 * manualmente o espaço da Sidebar/Header — números mágicos que
 * descolariam da tela real se a largura da Sidebar mudasse. Agora usa
 * DashboardLayout, igual a todas as outras páginas do Gestor.
 */
export default function CriarUsuario() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const etapasAtivas = STEPS_POR_PERFIL[formData.perfil ?? ''] ?? STEPS_PADRAO;

  const steps = [
    {
      number: 1,
      title: 'Etapa 1',
      subtitle: 'Informações Básicas',
      isActive: currentStep === 1,
      isCompleted: currentStep > 1,
      isSkipped: false,
    },
    {
      number: 2,
      title: 'Etapa 2',
      subtitle: 'Detalhes do Perfil',
      isActive: currentStep === 2,
      isCompleted: etapasAtivas.includes(2) && currentStep > 2,
      isSkipped: !etapasAtivas.includes(2),
    },
    {
      number: 3,
      title: 'Etapa 3',
      subtitle: 'Confirmação',
      isActive: currentStep === 3,
      isCompleted: false,
      isSkipped: false,
    },
  ];

  function handleNext(stepData: Partial<FormData>) {
    const novoFormData = { ...formData, ...stepData };
    setFormData(novoFormData);

    const perfil = novoFormData.perfil ?? '';
    const etapas = STEPS_POR_PERFIL[perfil] ?? STEPS_PADRAO;
    const indexAtual = etapas.indexOf(currentStep);
    const proximaEtapa = etapas[indexAtual + 1];

    if (proximaEtapa !== undefined) setCurrentStep(proximaEtapa);
  }

  function handleBack() {
    const etapas = STEPS_POR_PERFIL[formData.perfil ?? ''] ?? STEPS_PADRAO;
    const indexAtual = etapas.indexOf(currentStep);
    const etapaAnterior = etapas[indexAtual - 1];

    if (etapaAnterior !== undefined) setCurrentStep(etapaAnterior);
  }

  // "Cancelar" na Etapa 3 não abandona o cadastro (isso já existia e foi
  // mudado) — volta direto pra Etapa 1, mesmo quando a Etapa 2 estava
  // ativa nesse perfil (aluno/instrutor). Diferente de handleBack, que
  // volta uma etapa por vez seguindo etapasAtivas.
  function handleCancelToStep1() {
    setCurrentStep(1);
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <StepIndicator steps={steps} />
        <UserForm
          step={currentStep}
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
          onCancel={handleCancelToStep1}
        />
      </div>
    </DashboardLayout>
  );
}
