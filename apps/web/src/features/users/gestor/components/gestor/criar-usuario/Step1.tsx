import { useState } from 'react';
import { FormField } from '@/shared/components/inputs/FormField';
import type { FormData } from '../../../pages/CreateUserPage';

interface Step1Props {
  initialData: Partial<FormData>;
  onNext: (data: Partial<FormData>) => void;
}

const PERFIL_OPTIONS = [
  { label: 'Aluno', value: 'aluno' },
  { label: 'Instrutor', value: 'instrutor' },
  { label: 'Gestor', value: 'gestor' },
  { label: 'Administrador', value: 'admin' },
];

interface FormState {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
  nascimento: string;
  perfil: string;
  quadra: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  senha?: string;
  telefone?: string;
  cpf?: string;
  nascimento?: string;
  perfil?: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
}

const INITIAL: FormState = {
  nome: '', email: '', senha: '', telefone: '',
  cpf: '', nascimento: '', perfil: '',
  quadra: '', rua: '', bairro: '', cidade: '', estado: '', cep: '',
};

export function Step1({ initialData, onNext }: Step1Props) {
  const [form, setForm] = useState<FormState>({
    nome:       initialData.nome       ?? '',
    email:      initialData.email      ?? '',
    senha:      initialData.senha      ?? '',
    telefone:   initialData.telefone   ?? '',
    cpf:        initialData.cpf        ?? '',
    nascimento: initialData.nascimento ?? '',
    perfil:     initialData.perfil     ?? '',
    quadra:     initialData.quadra     ?? '',
    rua:        initialData.rua        ?? '',
    bairro:     initialData.bairro     ?? '',
    cidade:     initialData.cidade     ?? '',
    estado:     initialData.estado     ?? '',
    cep:        initialData.cep        ?? '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.nome.trim())       newErrors.nome       = 'Nome é obrigatório.';
    if (!emailRegex.test(form.email)) newErrors.email = 'E-mail inválido.';
    if (!form.senha.trim())      newErrors.senha      = 'Senha é obrigatória.';
    if (!form.telefone.trim())   newErrors.telefone   = 'Telefone é obrigatório.';
    if (!form.cpf.trim())        newErrors.cpf        = 'CPF é obrigatório.';
    if (!form.nascimento)        newErrors.nascimento = 'Data de nascimento é obrigatória.';
    if (!form.perfil)            newErrors.perfil     = 'Selecione um perfil.';
    if (!form.rua.trim())        newErrors.rua        = 'Rua é obrigatória.';
    if (!form.bairro.trim())     newErrors.bairro     = 'Bairro é obrigatório.';
    if (!form.cidade.trim())     newErrors.cidade     = 'Cidade é obrigatória.';
    if (!form.estado.trim())     newErrors.estado     = 'Estado é obrigatório.';
    if (!form.cep.trim())        newErrors.cep        = 'CEP é obrigatório.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleContinue() {
    if (validate()) onNext(form);
  }

  function handleCancel() {
    setForm(INITIAL);
    setErrors({});
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-medium text-black mb-1">Criar Novo Usuário</h2>
        <p className="text-base text-gray-500">Etapa 1: Informações Básicas</p>
      </div>

      <div className="px-6 py-6">
        <div className="flex flex-col gap-6">

          {/* Nome */}
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

          {/* Senha */}
          <FormField
            label="Senha"
            name="senha"
            type="text"
            placeholder="Senha temporária para o usuário"
            value={form.senha}
            onChange={handleChange}
            error={errors.senha}
          />

          {/* CPF e Nascimento */}
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

          {/* Perfil */}
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

          {/* Endereço */}
          <div>
            <p className="text-sm font-medium text-black mb-4">Endereço</p>
            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="CEP"
                  name="cep"
                  type="text"
                  placeholder="00000-000"
                  value={form.cep}
                  onChange={handleChange}
                  error={errors.cep}
                />
                <FormField
                  label="Quadra"
                  name="quadra"
                  type="text"
                  placeholder="Quadra (opcional)"
                  value={form.quadra}
                  onChange={handleChange}
                />
              </div>

              <FormField
                label="Rua"
                name="rua"
                type="text"
                placeholder="Digite a rua"
                value={form.rua}
                onChange={handleChange}
                error={errors.rua}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  label="Bairro"
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                  value={form.bairro}
                  onChange={handleChange}
                  error={errors.bairro}
                />
                <FormField
                  label="Cidade"
                  name="cidade"
                  type="text"
                  placeholder="Cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  error={errors.cidade}
                />
                <FormField
                  label="Estado"
                  name="estado"
                  type="text"
                  placeholder="UF"
                  value={form.estado}
                  onChange={handleChange}
                  error={errors.estado}
                />
              </div>

            </div>
          </div>

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
              onClick={handleContinue}
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
