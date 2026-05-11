interface Step {
  number: number;
  title: string;
  subtitle: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
}

export function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="relative flex items-center justify-between px-4">
        {/* Connection Lines */}
        <div className="absolute left-0 right-0 top-5 flex items-center justify-center px-16">
          <div className="flex-1 flex items-center gap-0">
            <div className="flex-1 h-0.5 bg-black" />
            <div className="flex-1 h-0.5 bg-black" />
          </div>
        </div>

        {/* Steps */}
        <div className="relative flex items-start justify-between w-full">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center gap-3 z-10">
              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step.isActive
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'bg-white border-gray-300 text-black'
                }`}
              >
                <span className="text-base font-normal">{step.number}</span>
              </div>

              {/* Labels */}
              <div className="flex flex-col items-center gap-1 min-w-[170px]">
                <p className="text-sm text-black text-center">{step.title}</p>
                <p className="text-xs text-gray-500 text-center">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
