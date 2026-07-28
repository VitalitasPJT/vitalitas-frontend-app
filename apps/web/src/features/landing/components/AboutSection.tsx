import { SectionContainer } from "./SectionContainer";
import { SectionEyebrow } from "./SectionEyebrow";
import { TeamCard, type TeamMember } from "./TeamCard";

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
    <section id="sobre" className="bg-white w-full py-20">
      <SectionContainer maxWidth="1400">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionEyebrow className="mb-4">QUEM SOMOS</SectionEyebrow>
          <h2 className="text-4xl font-bold text-[#0d0d0d] mb-4">
            Construído por quem viveu o problema
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-[600px] mx-auto">
            O Vitalitas nasceu de uma observação simples: academias de bairro movimentam comunidades inteiras, mas ainda dependem de cadernos, planilhas e grupos de WhatsApp para funcionar.
          </p>
        </div>

        {/* Quote and Team Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Quote */}
          <div className="space-y-6">
            <div className="text-[64px] leading-none text-[#e8001c]">"</div>
            <p className="text-xl italic text-[#0d0d0d] leading-relaxed">
              Vimos de perto o quanto uma academia pode crescer quando para de perder tempo com o operacional e foca no que realmente importa — as pessoas.
            </p>
            <p className="text-sm font-medium text-[#0d0d0d]">
              — Fundadores, Vitalitas
            </p>
            <div className="flex items-center gap-3">
              <span className="bg-[#e5e5e5] px-4 py-2 rounded-full text-sm font-medium text-[#0d0d0d]">
                Tecnologia acessível
              </span>
              <span className="bg-[#e5e5e5] px-4 py-2 rounded-full text-sm font-medium text-[#0d0d0d]">
                Foco no gestor
              </span>
              <span className="bg-[#e5e5e5] px-4 py-2 rounded-full text-sm font-medium text-[#0d0d0d]">
                Resultado real
              </span>
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
