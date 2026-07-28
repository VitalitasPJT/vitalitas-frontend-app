export interface Testimonial {
  initial: string;
  name: string;
  role: string;
  quote: string;
}

/**
 * Extraído de dentro de KnowYourStudentsSection.tsx, onde os dois cards
 * de depoimento tinham o mesmo markup copiado e colado (só trocando
 * inicial/nome/cargo/frase).
 */
export function TestimonialCard({ initial, name, role, quote }: Testimonial) {
  return (
    <div className="bg-[#f9fafb] rounded-[16px] p-8 border border-[#e5e5e5]">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-[18px] font-bold text-white">{initial}</span>
        </div>
        <div>
          <h4 className="text-[17px] font-bold text-[#0d0d0d]">{name}</h4>
          <p className="text-[14px] text-[#6b6b6b]">{role}</p>
        </div>
      </div>
      <p className="text-[15px] text-[#6b6b6b] leading-relaxed italic">"{quote}"</p>
    </div>
  );
}
