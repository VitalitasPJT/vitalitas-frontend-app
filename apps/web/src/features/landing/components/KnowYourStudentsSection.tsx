import { SectionContainer } from "./SectionContainer";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

// Depoimentos de exemplo — sem lógica de fetch, ver histórico da conversa.
const testimonials: Testimonial[] = [
  {
    initial: "R",
    name: "Ricardo Santos",
    role: "Proprietário - FitZone Academia",
    quote: "Antes do Vitalitas, eu passava horas em planilhas. Agora, tenho relatórios em tempo real e consigo focar no que realmente importa: meus alunos."
  },
  {
    initial: "J",
    name: "Juliana Oliveira",
    role: "Gestora - Power Gym",
    quote: "O app para os alunos foi um divisor de águas. A taxa de renovação aumentou 30% desde que implementamos o Vitalitas."
  }
];

export function KnowYourStudentsSection() {
  return (
    <section className="bg-section-alt py-[clamp(4rem,6vw,7rem)]">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-bold text-ink mb-6">
            Conheça melhor quem consome o Vitalitas
          </h2>
          <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-body max-w-3xl mx-auto leading-relaxed break-words">
            O Vitalitas já está transformando a gestão de academias em todo o Brasil. Veja o que nossos clientes têm a dizer sobre a experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
