import { useState } from 'react';
import { FormField } from '../../inputs/FormField';

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  nascimento: string;
  endereco: string;
  perfil: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  cpf?: string;
  nascimento?: string;
  endereco?: string;
  perfil?: string;
}

const PERFIL_OPTIONS = [
  { label: 'Instrutor', value: 'instrutor' },
  { label: 'Aluno', value: 'aluno' },
  { label: 'Gestor', value: 'gestor' },
  { label: 'Administrador', value: 'admin' },
];

const INITIAL_STATE: FormState = {
  nome: '',
  email: '',
  telefone: '',
  cpf: '',
  nascimento: '',
  endereco: '',
  perfil: '',
};

export function UserForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // limpa o erro do campo assim que o usuário começa a corrigir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    if (!emailRegex.test(form.email)) newErrors.email = 'E-mail inválido.';
    if (!form.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório.';
    if (!form.cpf.trim()) newErrors.cpf = 'CPF é obrigatório.';
    if (!form.nascimento) newErrors.nascimento = 'Data de nascimento é obrigatória.';
    if (!form.endereco.trim()) newErrors.endereco = 'Endereço é obrigatório.';
    if (!form.perfil) newErrors.perfil = 'Selecione um perfil.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    // TODO: chamar API / avançar para próxima etapa
    console.log('Dados da etapa 1:', form);
  }

  function handleCancel() {
    setForm(INITIAL_STATE);
    setErrors({});
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Card Header */}
      <div className="px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-medium text-black mb-1">
          Criar Novo Usuário
        </h2>
        <p className="text-base text-gray-500">Etapa 1: Informações Básicas</p>
      </div>

      {/* Card Content */}
      <div className="px-6 py-6">
        <div className="flex flex-col gap-6">
          {/* Nome Completo */}
          <FormField
            label="Nome Completo"
            name="nome"
            type="text"
            placeholder="Digite o nome completo"
            value={form.nome}
            onChange={handleChange}
            error={errors.nome}
          />

          {/* Email e Telefone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="exemplo@email.com"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormField
              label="Telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.telefone}
              onChange={handleChange}
              error={errors.telefone}
            />
          </div>

          {/* CPF e Data de Nascimento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="CPF"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={handleChange}
              error={errors.cpf}
            />
            <FormField
              label="Data de Nascimento"
              name="nascimento"
              type="date"
              placeholder="dd/mm/yyyy"
              value={form.nascimento}
              onChange={handleChange}
              error={errors.nascimento}
            />
          </div>

          {/* Endereço */}
          <FormField
            label="Endereço"
            name="endereco"
            type="text"
            placeholder="Digite o endereço completo"
            value={form.endereco}
            onChange={handleChange}
            error={errors.endereco}
          />

          {/* Perfil de Usuário */}
          <FormField
            label="Perfil de Usuário"
            name="perfil"
            type="select"
            placeholder="Selecione o perfil do usuário"
            value={form.perfil}
            onChange={handleChange}
            options={PERFIL_OPTIONS}
            helpText="Informações adicionais específicas do perfil serão solicitadas na próxima etapa."
            error={errors.perfil}
          />

          {/* Botões */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2.5 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
