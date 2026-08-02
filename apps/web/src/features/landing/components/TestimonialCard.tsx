import { Avatar } from "@/shared/components/ui/Avatar";

export interface Testimonial {
  initial: string;
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ initial, name, role, quote }: Testimonial) {
  return (
    <div className="bg-surface-alt rounded-[16px] p-8 border border-border min-w-0">
      <div className="flex items-start gap-4 mb-6">
        <Avatar initials={initial} tone="brand" size="lg" />
        <div className="min-w-0">
          <h4 className="text-[17px] font-bold text-ink break-words">{name}</h4>
          <p className="text-[14px] text-body break-words">{role}</p>
        </div>
      </div>
      <p className="text-[15px] text-body leading-relaxed italic break-words">"{quote}"</p>
    </div>
  );
}
