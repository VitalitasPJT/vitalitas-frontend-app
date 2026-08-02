import type { ReactNode } from "react";

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureListItem({ icon, title, description }: FeatureItem) {
  return (
    <div className="flex gap-4">
      <div className="w-[clamp(2.5rem,3vw,3.25rem)] h-[clamp(2.5rem,3vw,3.25rem)] bg-brand rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      {/* min-w-0: sem isso, um flex item com texto longo não encolhe e pode
          estourar a largura do container. break-words: rede de segurança
          extra pra palavras muito longas. */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[clamp(1rem,1.1vw,1.0625rem)] font-semibold text-ink mb-1 break-words">{title}</h3>
        <p className="text-[clamp(0.9rem,1vw,0.9375rem)] text-body leading-relaxed break-words">{description}</p>
      </div>
    </div>
  );
}

interface FeatureListProps {
  features: FeatureItem[];
  className?: string;
}

export function FeatureList({ features, className = "" }: FeatureListProps) {
  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {features.map((feature) => (
        <FeatureListItem key={feature.title} {...feature} />
      ))}
    </div>
  );
}
