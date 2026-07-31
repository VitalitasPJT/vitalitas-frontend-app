import type { ReactNode } from "react";

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureListItem({ icon, title, description }: FeatureItem) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-[17px] font-semibold text-ink mb-1">{title}</h3>
        <p className="text-[15px] text-body leading-relaxed">{description}</p>
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
