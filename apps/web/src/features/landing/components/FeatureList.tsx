import type { ReactNode } from "react";

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Um item de feature: ícone circular vermelho + título + descrição.
 * Esse bloco era montado manualmente dentro de um .map() em
 * ManagerSection.tsx e StudentSection.tsx, com o mesmo markup exato.
 */
export function FeatureListItem({ icon, title, description }: FeatureItem) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-[17px] font-semibold text-[#0d0d0d] mb-1">{title}</h3>
        <p className="text-[15px] text-[#6b6b6b] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface FeatureListProps {
  features: FeatureItem[];
  className?: string;
}

/** Lista vertical de FeatureListItem com o espaçamento padrão (space-y-6). */
export function FeatureList({ features, className = "" }: FeatureListProps) {
  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {features.map((feature) => (
        <FeatureListItem key={feature.title} {...feature} />
      ))}
    </div>
  );
}
