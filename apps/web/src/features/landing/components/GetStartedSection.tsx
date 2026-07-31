import { SectionContainer } from "./SectionContainer";
import { SectionEyebrow } from "./SectionEyebrow";
import { Button } from "@/shared/components/ui/Button";

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16667 10H15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8333 4.16667L15.8333 10L10.8333 15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function GetStartedSection() {
  return (
    // Fundo em degradê escuro intencional — funciona como uma faixa de CTA de
    // destaque e não deve mudar com o tema do site (mesmo raciocínio do Footer).
    <section className="bg-gradient-to-b from-[#0d0d0d] to-[#1a0004] py-24 lg:py-32">
      <SectionContainer className="flex flex-col items-center text-center gap-6">

        <SectionEyebrow>COMECE AGORA</SectionEyebrow>

        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-white leading-tight max-w-3xl">
          Sua academia também precisa do Vitalitas
        </h2>

        <p className="text-[18px] text-[#9b9b9b] max-w-xl leading-relaxed">
          Fale com nosso time e descubra o plano ideal para o tamanho da sua academia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Button size="lg" icon={<ArrowRightIcon />}>
            Contratar o Vitalitas
          </Button>
          <Button variant="outline-light" size="lg">
            Fale com nosso suporte
          </Button>
        </div>

        <p className="text-[13px] text-[#6b6b6b] mt-2">
          Suporte incluso · Configuração assistida
        </p>

      </SectionContainer>
    </section>
  );
}
