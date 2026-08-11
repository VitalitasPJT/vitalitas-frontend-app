interface ToggleChipGroupProps {
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  error?: string;
  /** Colunas do grid. Default 2 (era o único caso de uso até agora). */
  columns?: 1 | 2 | 3;
}

const columnsClasses: Record<1 | 2 | 3, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
};

/**
 * Grupo de chips com seleção múltipla (liga/desliga ao clicar). Extraído
 * do grid de "Objetivos" em Step2.tsx (fluxo de criar usuário), que tinha
 * esse padrão implementado localmente com cores hardcoded e sem dark
 * mode. Não existia equivalente compartilhado — Badge.tsx é só exibição
 * (não clicável), então não cobria esse caso.
 *
 * Estado selecionado usa o token "brand" (mesma cor de destaque do resto
 * do app), não "danger" — o grupo original usava tons de vermelho que
 * coincidiam visualmente com o brand só porque o brand do app também é
 * vermelho, mas semanticamente era o token errado pra usar aqui.
 */
export function ToggleChipGroup({ options, selected, onToggle, error, columns = 2 }: ToggleChipGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`grid ${columnsClasses[columns]} gap-3`}>
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              aria-pressed={isSelected}
              className={`px-4 py-3 rounded-md border text-sm font-medium text-left transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-brand-light border-brand text-brand dark:text-white'
                  : 'bg-surface border-border text-body hover:border-ink/30 dark:hover:border-white/20'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}
