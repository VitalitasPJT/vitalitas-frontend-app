import svgPaths from "@/shared/assets/icons/links/svg-30hlfm6d6z";
import { SectionContainer } from "./SectionContainer";
import { SectionEyebrow } from "./SectionEyebrow";
import { FeatureList, type FeatureItem } from "./FeatureList";
import { Badge } from "@/shared/components/ui/Badge";

const studentFeatures: FeatureItem[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p28b1aae0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Treinos na palma da mão",
    description: "O aluno acessa sua ficha de treino, vídeos dos exercícios e progressão diretamente no celular."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p32f12c00} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Agendamento de avaliações",
    description: "O aluno agenda sua própria avaliação física sem precisar ligar ou mandar mensagem."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p1e533000} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Pagamento pelo app",
    description: "Mensalidade, pacotes e cobranças avulsas — o aluno paga direto pelo aplicativo, sem filas ou boletos perdidos."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p13253c0} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7H22V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Acompanhamento da evolução",
    description: "Gráficos de medidas, recordes pessoais e histórico de avaliações motivam o aluno a continuar."
  }
];

export function StudentSection() {
  return (
    <section id="alunos" className="bg-section-alt py-16 lg:py-24">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Mobile Mockups.
              CORREÇÃO: antes era "flex" sempre, com dois w-[148px] fixos +
              gap-8 (32px) = 328px mínimos, que não cabiam em telas de
              320-375px e causavam rolagem horizontal na página inteira.
              Agora empilha (flex-col) por padrão e só vira lado a lado
              a partir de sm: (≥640px), onde já sobra espaço de sobra. */}
          <div className="relative flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-start gap-8">
            {/* Phone 1 - Workout */}
            <div className="relative">
              <div className="bg-[#0d0d0d] rounded-[32px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-[6px] w-[148px]">
                <div className="bg-white rounded-[26px] overflow-hidden h-[283px] p-4">
                  <div className="space-y-3 pt-8">
                    <div className="bg-white border border-[rgba(170,170,170,0.67)] rounded-[10px] p-2">
                      <p className="text-[10px] font-semibold text-[#0d0d0d]">Supino Reto</p>
                      <p className="text-[8px] text-[#6b6b6b]">3x12 • 60kg</p>
                    </div>
                    <div className="bg-white border border-[rgba(170,170,170,0.67)] rounded-[10px] p-2">
                      <p className="text-[10px] font-semibold text-[#0d0d0d]">Leg Press</p>
                      <p className="text-[8px] text-[#6b6b6b]">3x12 • 120kg</p>
                    </div>
                    <div className="bg-white border border-[rgba(170,170,170,0.67)] rounded-[10px] p-2">
                      <p className="text-[10px] font-semibold text-[#0d0d0d]">Abdominal</p>
                      <p className="text-[8px] text-[#6b6b6b]">3x12 • 180kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 - Student Profile */}
            <div className="relative">
              <div className="bg-[#0d0d0d] rounded-[32px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-[6px] w-[148px]">
                <div className="bg-white rounded-[26px] overflow-hidden h-[283px]">
                  <div className="bg-[#f9fafb] p-3 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-[40px] h-[40px] bg-[#e8001c] rounded-full flex items-center justify-center">
                        <span className="text-[12px] font-bold text-white">M</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#0a0a0a]">Maria Silva</p>
                        <p className="text-[8px] text-[#6b6b6b]">Aluna</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-3 mb-3">
                      <p className="text-[9px] text-[#6b6b6b] mb-2">Evolução</p>
                      <div className="flex items-end gap-1 h-[50px]">
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '40%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '55%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '45%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '70%'}}></div>
                        <div className="flex-1 bg-[#e8001c] rounded-t" style={{height: '65%'}}></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] p-2">
                      <p className="text-[9px] text-[#6b6b6b] mb-1">Mensalidade</p>
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold text-[#0d0d0d]">R$ 149,90</p>
                        <Badge variant="success" size="sm">Paga</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <SectionEyebrow className="mb-6">PARA O ALUNO</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink leading-tight mb-6">
              Uma experiência que faz o aluno querer voltar
            </h2>
            <p className="text-[16px] text-body leading-relaxed mb-12">
              Quando o aluno tem uma boa experiência, ele renova. O app do Vitalitas transforma a rotina de treino em algo que o aluno realmente usa e aprecia.
            </p>

            <FeatureList features={studentFeatures} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
