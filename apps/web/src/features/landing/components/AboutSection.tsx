import { SectionContainer } from "./SectionContainer";
import { SectionEyebrow } from "./SectionEyebrow";
import { TeamCard, type TeamMember } from "./TeamCard";
import { Badge } from "@/shared/components/ui/Badge";

const teamMembers: TeamMember[] = [
  { initials: "SM", name: "Sanderson Machado", role: "Fundador · CEO", tags: ["Gerente de Projeto", "Tech Lead"] },
  { initials: "IG", name: "Iuri Guimarães", role: "Frontend Developer", tags: ["Desenvolvimento", "UI/UX"] },
  { initials: "GC", name: "Giovanna Couto", role: "Scrum Master", tags: ["Co-fundadora", "Gestão Ágil"] },
  { initials: "AG", name: "Arthur Guaritá", role: "UI/UX Designer", tags: ["Frontend Developer", "Tech Lead"] },
  { initials: "HF", name: "Hugo Ferreira", role: "DBA & QA", tags: ["Banco de Dados", "Testes"] },
  { initials: "PL", name: "Pedro Luiz", role: "Backend Developer", tags: ["Tecnologia"] },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-surface w-full py-20">
      <SectionContainer maxWidth="1400">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionEyebrow className="mb-4">QUEM SOMOS</SectionEyebrow>
          <h2 className="text-4xl font-bold text-ink mb-4">
            Construído por quem viveu o problema
          </h2>
          <p className="text-lg text-body max-w-[600px] mx-auto">
            O Vitalitas nasceu de uma observação simples: academias de bairro movimentam comunidades inteiras, mas ainda dependem de cadernos, planilhas e grupos de WhatsApp para funcionar.
          </p>
        </div>

        {/* Quote and Team Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Quote */}
          <div className="space-y-6">
            <div className="text-[64px] leading-none text-brand">"</div>
            <p className="text-xl italic text-ink leading-relaxed">
              Vimos de perto o quanto uma academia pode crescer quando para de perder tempo com o operacional e foca no que realmente importa — as pessoas.
            </p>
            <p className="text-sm font-medium text-ink">
              — Fundadores, Vitalitas
            </p>
            <div className="flex items-center gap-3">
              <Badge variant="neutral" size="md">Tecnologia acessível</Badge>
              <Badge variant="neutral" size="md">Foco no gestor</Badge>
              <Badge variant="neutral" size="md">Resultado real</Badge>
            </div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.initials} {...member} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
