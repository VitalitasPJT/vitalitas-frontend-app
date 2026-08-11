import { useState } from 'react';
import { Calendar, Eye, EyeOff } from 'lucide-react';
import type { FormFieldProps } from '@/shared/types/Inputs';

// Hint de autocomplete correto por nome de campo. Antes era só
// name === 'senha' ? 'new-password' : 'off' — o "off" genérico faz o
// Chrome tentar adivinhar sozinho o que o campo é, e se houver um campo
// de senha em algum lugar do formulário, o Chrome trata o form inteiro
// como login e oferece autofill de credencial salva no primeiro campo de
// texto que parecer plausível (foi o que aconteceu com "Telefone",
// sugerindo e-mails salvos). Um hint específico (tel/email/etc.) resolve
// isso na raiz — "off" nunca é 100% respeitado pelo Chrome, mas um valor
// específico é.
const AUTO_COMPLETE_MAP: Record<string, string> = {
  nome: 'name',
  email: 'email',
  telefone: 'tel',
  senha: 'new-password',
  nascimento: 'bday',
  cep: 'postal-code',
  rua: 'address-line1',
  bairro: 'address-line2',
  cidade: 'address-level2',
  estado: 'address-level1',
};

// Trava o destaque visual que o Chrome aplica sozinho em campos que ele
// decide autopreencher (o "fundo cinza diferente" reportado) — atrasa a
// transição de cor do autofill por tempo suficiente pra nunca aparecer
// visualmente, sem precisar acertar a cor exata do token via CSS.
const AUTOFILL_RESET =
  "autofill:[-webkit-text-fill-color:currentColor] autofill:[transition:background-color_9999s_ease-in-out_0s]";

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  helpText,
  options,
  error,
  rows = 3,
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const autoComplete = AUTO_COMPLETE_MAP[name] ?? 'off';

  if (type === 'select') {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-sm font-medium text-ink">
          {label}
        </label>
        <div className="relative">
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={`w-full h-11 px-3 py-2 bg-surface border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand appearance-none ${
              error ? 'border-danger' : 'border-border'
            } ${value === '' ? 'text-body' : 'text-ink'}`}
          >
            {/* disabled + hidden: some o placeholder da lista de opções
                clicáveis do dropdown, mas ainda mostra o texto quando
                nada foi selecionado — sem isso, "Selecione o perfil..."
                aparecia como uma opção normal dentro da lista. */}
            <option value="" disabled hidden>{placeholder}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-body">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
        {helpText && <p className="text-sm text-body">{helpText}</p>}
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    );
  }

  if (type === 'date') {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-sm font-medium text-ink">
          {label}
        </label>
        <div className="relative">
          <input
            type="date"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={`w-full h-11 px-3 py-2 bg-surface border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand ${AUTOFILL_RESET} ${
              error ? 'border-danger' : 'border-border'
            } ${value === '' ? 'text-body' : 'text-ink'}`}
          />
          <Calendar
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink pointer-events-none"
          />
        </div>
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-sm font-medium text-ink">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-3 py-2 bg-surface border rounded-md text-sm placeholder:text-body/70 resize-none focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand ${
            error ? 'border-danger text-ink' : 'border-border text-ink'
          }`}
        />
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    );
  }

  if (type === 'password') {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-sm font-medium text-ink">
          {label}
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={`w-full h-11 px-3 py-2 pr-10 bg-surface border rounded-md text-sm placeholder:text-body/70 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand ${AUTOFILL_RESET} ${
              error ? 'border-danger text-ink' : 'border-border text-ink'
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-body hover:text-ink transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full h-11 px-3 py-2 bg-surface border rounded-md text-sm placeholder:text-body/70 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand ${AUTOFILL_RESET} ${
          error ? 'border-danger text-ink' : 'border-border text-ink'
        }`}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}
