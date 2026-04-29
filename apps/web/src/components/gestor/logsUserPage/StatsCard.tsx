import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  subtitleColor?: string;
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor,
  iconBgColor,
  subtitleColor = '#71717a',
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm font-medium text-[#71717a]">{title}</p>
        <div
          className="size-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="size-5" style={{ color: iconColor }} />
        </div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-[#18181b] mb-1">{value}</p>
        <p className="text-xs font-medium" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
