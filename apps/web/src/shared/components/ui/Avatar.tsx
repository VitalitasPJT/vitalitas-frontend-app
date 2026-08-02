type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarTone = "brand" | "neutral";

interface AvatarProps {
  /** Iniciais exibidas quando não há `src` (ex: "IG", "M") */
  initials?: string;
  size?: AvatarSize;
  /** "brand" = fundo vermelho + texto branco. "neutral" = fundo cinza + texto escuro (ex: TeamCard) */
  tone?: AvatarTone;
  /** Se fornecido, renderiza a imagem no lugar das iniciais */
  src?: string;
  alt?: string;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-[12px]",
  md: "w-10 h-10 text-[14px]",
  lg: "w-12 h-12 text-[18px]",
  xl: "w-[52px] h-[52px] text-base",
};

const toneClasses: Record<AvatarTone, string> = {
  brand: "bg-brand text-white",
  neutral: "bg-surface-muted text-ink",
};

/**
 * Avatar compartilhado — círculo com iniciais ou foto. Cobre TeamCard,
 * TestimonialCard, a lista de alunos do HeroSection/ProductShowcaseSection
 * e os mockups de celular do StudentSection, que hoje reimplementam esse
 * círculo cada um com o próprio tamanho/cor.
 *
 * Depende dos tokens de cor em docs/design-tokens.md.
 */
export function Avatar({ initials, size = "md", tone = "brand", src, alt, className = "" }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? initials}
        className={`rounded-full object-cover flex-shrink-0 ${sizeClasses[size]} ${className}`.trim()}
      />
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${toneClasses[tone]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {initials}
    </div>
  );
}
