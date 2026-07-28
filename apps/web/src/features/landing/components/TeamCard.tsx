export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  tags: string[];
}

/**
 * Movido de dentro de AboutSection.tsx (onde já estava bem extraído como
 * função local) para shared/, já que é um cartão genérico o suficiente
 * para reaparecer em outras páginas (ex: uma página "Sobre" própria).
 */
export function TeamCard({ initials, name, role, tags }: TeamMember) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-[rgba(170,170,170,0.67)] flex items-start gap-3 h-full">
      <div className="size-[52px] rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
        <span className="text-base font-semibold text-[#0d0d0d]">{initials}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-[15px] font-semibold text-[#0d0d0d] leading-snug">{name}</p>
        <p className="text-[13px] text-[#6b6b6b]">{role}</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-[#fff0f2] px-2 py-0.5 rounded-full text-[11px] font-medium text-[#e8001c]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
