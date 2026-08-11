import type { CheckboxProps } from '@/shared/types/Inputs';

/**
 * Checkbox compartilhado, extraído do padrão manual usado em
 * Step2Instrutor (confirmação de registro no CREF): <input
 * type="checkbox"> + <label> desenhados na mão, cor hardcoded
 * (accent-red-500), sem lugar próprio pra mensagem de erro.
 *
 * `label` aceita ReactNode (não só string) porque o texto original do
 * CREF tinha ênfase em partes específicas — igual ao padrão que FormField
 * segue pra label simples, mas aqui o rótulo pode ser mais longo/rico.
 */
export function Checkbox({ id, checked, onChange, label, error }: CheckboxProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
        />
        <span className="text-sm text-body">{label}</span>
      </label>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}
