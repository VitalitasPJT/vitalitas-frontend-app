import { SectionContainer } from "./SectionContainer";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

// Depoimentos de exemplo. Quando existirem depoimentos reais de alunos,
// substitua este array — nenhuma lógica de busca (API/banco) foi
// adicionada aqui de propósito; a seção continua puramente estática até
// que o conteúdo real exista.
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
    <section className="bg-[#e5e5e5] py-16 lg:py-24">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-[#0d0d0d] mb-6">
            Conheça melhor quem consome o Vitalitas
          </h2>
          <p className="text-[18px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
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
