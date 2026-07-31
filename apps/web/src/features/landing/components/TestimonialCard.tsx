import { Avatar } from "@/shared/components/ui/Avatar";

export interface Testimonial {
  initial: string;
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ initial, name, role, quote }: Testimonial) {
  return (
    <div className="bg-surface-alt rounded-[16px] p-8 border border-border">
      <div className="flex items-start gap-4 mb-6">
        <Avatar initials={initial} tone="brand" size="lg" />
        <div>
          <h4 className="text-[17px] font-bold text-ink">{name}</h4>
          <p className="text-[14px] text-body">{role}</p>
        </div>
      </div>
      <p className="text-[15px] text-body leading-relaxed italic">"{quote}"</p>
    </div>
  );
}
