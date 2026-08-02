import { Avatar } from "@/shared/components/ui/Avatar";
import { Badge } from "@/shared/components/ui/Badge";

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  tags: string[];
}

export function TeamCard({ initials, name, role, tags }: TeamMember) {
  return (
    <div className="bg-surface p-5 rounded-2xl border border-border flex items-start gap-3 h-full">
      <Avatar initials={initials} tone="neutral" size="xl" />
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-[15px] font-semibold text-ink leading-snug">{name}</p>
        <p className="text-[13px] text-body">{role}</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="brand" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
