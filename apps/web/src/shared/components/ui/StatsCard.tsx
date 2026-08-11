import type { LucideIcon } from 'lucide-react';

export type StatsCardTone = 'neutral' | 'success' | 'danger' | 'info' | 'orange' | 'cyan' | 'purple';

interface ToneClasses {
  iconBg: string;
  icon: string;
  subtitle: string;
}

/**
 * Reaproveita os tokens success/danger de shared/tailwind.css onde possível
 * (mesmo espírito de Badge.tsx/IconBadge.tsx). Não existem tokens pra
 * info/orange/cyan/purple ainda — mesma situação já registrada em
 * PasswordStrengthMeter.tsx pro amarelo de "força média": valor pontual até
 * um token existir.
 */
const toneClasses: Record<StatsCardTone, ToneClasses> = {
  neutral: { iconBg: 'bg-surface-alt dark:bg-surface-muted', icon: 'text-body', subtitle: 'text-body' },
  success: { iconBg: 'bg-success-light', icon: 'text-success', subtitle: 'text-success' },
  danger:  { iconBg: 'bg-danger-light',  icon: 'text-danger',  subtitle: 'text-danger' },
  info:    { iconBg: 'bg-[#eff6ff] dark:bg-[rgba(59,130,246,0.15)]', icon: 'text-[#3b82f6]', subtitle: 'text-[#3b82f6]' },
  orange:  { iconBg: 'bg-[#fff7ed] dark:bg-[rgba(249,115,22,0.15)]', icon: 'text-[#f97316]', subtitle: 'text-[#f97316]' },
  cyan:    { iconBg: 'bg-[#ecfeff] dark:bg-[rgba(6,182,212,0.15)]',  icon: 'text-[#06b6d4]', subtitle: 'text-[#06b6d4]' },
  purple:  { iconBg: 'bg-[#faf5ff] dark:bg-[rgba(168,85,247,0.15)]', icon: 'text-[#a855f7]', subtitle: 'text-[#a855f7]' },
};

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  tone?: StatsCardTone;
  loading?: boolean;
}

/**
 * Card de estatística compartilhado entre Gestor e Instrutor (e qualquer
 * outra role futura). Consolida dois padrões que existiam em paralelo:
 *
 * - features/gestor/.../StatsCards.tsx (tela Usuários): StatCard local não
 *   exportado, ícones SVG desenhados manualmente com a cor repetida à mão
 *   em cada path (risco de dessincronizar ícone x cor). Tentava dark mode
 *   via data-light/data-dark + classe "dark-subtitle" sem CSS
 *   correspondente encontrado em nenhum arquivo até agora — mecanismo
 *   provavelmente incompleto.
 * - StatsCard.tsx (tela Atividades, "padrão antigo"): API mais limpa
 *   (recebe o componente LucideIcon direto + cor via prop, sem redesenhar
 *   SVG à mão), mas sem loading e sem nenhum suporte a dark mode.
 *
 * Este componente usa a API do segundo (muda a cor do ícone em um lugar
 * só, não em cada path de SVG) e reaproveita o loading do primeiro.
 * Dark mode resolvido com classes Tailwind por `tone` (mesmo padrão de
 * Badge.tsx/IconBadge.tsx) — inline style não tem como variar por tema.
 */
export function StatsCard({ title, value, subtitle, icon: Icon, tone = 'neutral', loading = false }: StatsCardProps) {
  const classes = toneClasses[tone];

  return (
    <div className="
      bg-white dark:bg-[#1c1c1f]
      rounded-xl border border-[#e4e4e7] dark:border-[rgba(255,255,255,0.06)]
      p-6 flex flex-col gap-4
      hover:shadow-md transition-shadow
    ">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-body">{title}</p>
        <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${classes.iconBg}`}>
          <Icon className={`size-5 ${classes.icon}`} />
        </div>
      </div>
      <div>
        {loading ? (
          <div className="h-9 w-16 bg-gray-100 dark:bg-[#2c2c30] rounded animate-pulse mb-1" />
        ) : (
          <p className="text-3xl font-semibold text-ink mb-1">{value}</p>
        )}
        <p className={`text-xs font-medium ${classes.subtitle}`}>{subtitle}</p>
      </div>
    </div>
  );
}
