export function AboutSection() {
    return (
        <section id="sobre" className="bg-[#e5e5e5] w-full py-20">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[13px] font-medium text-[#e8001c] tracking-[1.3px] uppercase mb-4">
                        QUEM SOMOS
                    </p>
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
                            <span className="bg-[#ffffff] px-4 py-2 rounded-full text-sm font-medium text-[#0d0d0d]">
                                Tecnologia acessível
                            </span>
                            <span className="bg-[#ffffff] px-4 py-2 rounded-full text-sm font-medium text-[#0d0d0d]">
                                Foco no gestor
                            </span>
                            <span className="bg-[#ffffff] px-4 py-2 rounded-full text-sm font-medium text-[#0d0d0d]">
                                Resultado real
                            </span>
                        </div>
                    </div>

                    {/* Team Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <TeamCard
                            initials="SM"
                            name="Sanderson Machado"
                            role="Fundador · CEO"
                            tags={["Gerente de Projeto", "Tech Lead"]}
                        />
                        <TeamCard
                            initials="IG"
                            name="Iuri Guimarães"
                            role="Frontend Developer"
                            tags={["Desenvolvimento", "UI/UX"]}
                        />
                        <TeamCard
                            initials="GC"
                            name="Giovanna Couto"
                            role="Scrum Master"
                            tags={["Co-fundadora", "Gestão Ágil"]}
                        />
                        <TeamCard
                            initials="AG"
                            name="Arthur Guaritá"
                            role="UI/UX Designer"
                            tags={["Frontend Developer", "Tech Lead" ]}
                        />
                        <TeamCard
                            initials="HF"
                            name="Hugo Ferreira"
                            role="DBA & QA"
                            tags={["Banco de Dados", "Testes"]}
                        />
                        <TeamCard
                            initials="PL"
                            name="Pedro Luiz"
                            role="Backend Developer"
                            tags={["Tecnologia"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

interface TeamCardProps {
    initials: string;
    name: string;
    role: string;
    tags: string[];
}

function TeamCard({ initials, name, role, tags }: TeamCardProps) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-[rgba(170,170,170,0.67)] flex items-start gap-3 h-full">
            <div className="size-[52px] rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                <span className="text-base font-semibold text-[#0d0d0d]">
                    {initials}
                </span>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
                <p className="text-[15px] font-semibold text-[#0d0d0d] truncate">
                    {name}
                </p>
                <p className="text-[13px] text-[#6b6b6b]">{role}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                    {tags.map((tag) => (
                        <span key={tag} className="inline-block bg-[#fff0f2] px-2 py-0.5 rounded-full text-[11px] font-medium text-[#e8001c]">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}