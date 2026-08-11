import { Check, SkipForward } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  subtitle: string;
  isActive: boolean;
  isCompleted: boolean;
  isSkipped?: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
}

/**
 * Dark mode adicionado via tokens (text-ink, text-body, border-border,
 * bg-brand, bg-surface-muted). Ícones de check/skip trocados de SVG
 * desenhado à mão para lucide-react (Check, SkipForward), já padrão no
 * resto do projeto.
 */
export function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative flex items-center justify-between px-4">

        {/* Linhas de conexão entre os círculos */}
        <div className="absolute left-0 right-0 top-5 flex items-center justify-center px-16">
          <div className="flex-1 flex">
            {steps.slice(0, -1).map((step) => (
              <div
                key={step.number}
                className={`flex-1 h-0.5 transition-colors ${
                  step.isCompleted
                    ? 'bg-brand'
                    : step.isSkipped
                    ? 'bg-surface-muted'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Círculos e labels */}
        <div className="relative flex items-start justify-between w-full">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-3 z-10">

              {/* Círculo */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                  step.isSkipped
                    ? 'bg-surface-muted border-border text-body'
                    : step.isCompleted
                    ? 'bg-brand border-brand text-white'
                    : step.isActive
                    ? 'bg-brand border-brand text-white'
                    : 'bg-surface border-border text-body'
                }`}
              >
                {step.isSkipped ? (
                  <SkipForward size={14} strokeWidth={2.5} />
                ) : step.isCompleted ? (
                  <Check size={16} strokeWidth={3} />
                ) : (
                  <span className="text-base font-normal">{step.number}</span>
                )}
              </div>

              {/* Labels */}
              <div className="flex flex-col items-center gap-1 min-w-[170px]">
                <p
                  className={`text-sm text-center font-medium transition-colors ${
                    step.isSkipped
                      ? 'text-body/60'
                      : step.isActive || step.isCompleted
                      ? 'text-ink'
                      : 'text-body'
                  }`}
                >
                  {step.title}
                  {step.isSkipped && (
                    <span className="ml-1 text-xs font-normal text-body/60">(ignorada)</span>
                  )}
                </p>
                <p
                  className={`text-xs text-center transition-colors ${
                    step.isSkipped ? 'text-body/60' : 'text-body'
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
