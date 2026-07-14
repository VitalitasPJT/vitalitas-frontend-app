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

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SkipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

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
                    ? 'bg-red-500'
                    : step.isSkipped
                    ? 'bg-gray-200'
                    : 'bg-gray-300'
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
                    ? 'bg-gray-100 border-gray-200 text-gray-400'
                    : step.isCompleted
                    ? 'bg-red-500 border-red-500 text-white'
                    : step.isActive
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {step.isSkipped ? (
                  <SkipIcon />
                ) : step.isCompleted ? (
                  <CheckIcon />
                ) : (
                  <span className="text-base font-normal">{step.number}</span>
                )}
              </div>

              {/* Labels */}
              <div className="flex flex-col items-center gap-1 min-w-[170px]">
                <p
                  className={`text-sm text-center font-medium transition-colors ${
                    step.isSkipped
                      ? 'text-gray-300'
                      : step.isActive || step.isCompleted
                      ? 'text-black'
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                  {step.isSkipped && (
                    <span className="ml-1 text-xs font-normal text-gray-300">(ignorada)</span>
                  )}
                </p>
                <p
                  className={`text-xs text-center transition-colors ${
                    step.isSkipped ? 'text-gray-300' : 'text-gray-500'
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
