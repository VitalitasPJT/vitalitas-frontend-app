import { useState } from "react";
import type { InputFieldProps } from '@/shared/types/Inputs';

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

/**
 * Reenvio: o InputField.tsx que estava no projeto era a versão anterior
 * ao ajuste de autoComplete — o InputFieldProps já aceitava a prop, mas o
 * componente não a desestruturava nem repassava pro <input> real, então
 * ela não tinha efeito nenhum (nem erro de tipo, nem funcionalidade).
 */
export function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon,
  error,
  isPassword = false,
  // Diferente do FormField (que infere autoComplete internamente a partir
  // do `name` — ver FormField.tsx), aqui quem chama o componente decide e
  // passa explicitamente. Todo formulário novo com campo de senha
  // precisa lembrar de passar autoComplete="new-password" na mão.
  autoComplete,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1">
      <div className={`
        relative flex h-[60px] w-full items-center rounded-[14px] border-2 shadow-sm
        bg-white dark:bg-[#2c2c30]
        transition-colors
        focus-within:border-[#18181b] dark:focus-within:border-[#e4e4e7]
        ${error
          ? "border-[#ee2b47] dark:border-[#ee2b47]"
          : "border-[#e4e4e7] dark:border-[rgba(255,255,255,0.1)]"}
      `}>

        {/* Ícone */}
        <span className="absolute left-4 text-[#18181b]/40 dark:text-[#e4e4e7]/40">
          {icon}
        </span>

        {/* Input */}
        <input
          type={inputType}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="
            peer h-full w-full rounded-[14px] bg-transparent
            pb-3 pl-12 pr-12 pt-5 outline-none
            text-[#18181b] dark:text-[#e4e4e7]
            caret-[#ee2b47]
          "
        />

        {/* Label flutuante */}
        <label
          htmlFor={id}
          className="
            pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 px-1
            text-base text-[#18181b]/50 dark:text-[#e4e4e7]/50
            bg-white dark:bg-[#2c2c30]
            transition-all
            peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-[#18181b] dark:peer-focus:text-[#e4e4e7]
            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[13px]
          "
        >
          {label}
        </label>

        {/* Toggle senha */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className="absolute right-3 text-[#18181b]/40 dark:text-[#e4e4e7]/40 hover:text-[#18181b] dark:hover:text-[#e4e4e7] transition-colors"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-[13px] text-[#ee2b47]">{error}</p>
      )}
    </div>
  );
}
