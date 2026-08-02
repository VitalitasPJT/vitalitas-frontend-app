import { useState } from "react";
import appAlunoImage from "@/shared/assets/imgs/MobileStudentDashboard.png";
import { SectionContainer } from "./SectionContainer";
import { SectionEyebrow } from "./SectionEyebrow";
import { BrowserWindowFrame } from "./BrowserWindowFrame";
import { Badge } from "@/shared/components/ui/Badge";
import { Avatar } from "@/shared/components/ui/Avatar";

const tabUrls = {
  manager: "app.vitalitas.com.br/admin_dashboard",
  finance: "app.vitalitas.com.br/financeiro",
  student: "app.vitalitas.com.br/app",
  assessments: "app.vitalitas.com.br/avaliacoes"
} as const;

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"manager" | "finance" | "student" | "assessments">("manager");

  const tabs = [
    { id: "manager" as const, label: "Painel do Gestor" },
    { id: "finance" as const, label: "Financeiro" },
    { id: "student" as const, label: "App do Aluno" },
    { id: "assessments" as const, label: "Avaliações" }
  ];

  return (
    <section id="produto" className="bg-surface py-[clamp(4rem,6vw,7rem)]">
      <SectionContainer>
        {/* Header */}
        <div className="text-center mb-12">
          <SectionEyebrow className="mb-4">O PRODUTO</SectionEyebrow>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-ink mb-4">
            Veja o Vitalitas em ação
          </h2>
          <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-body">
            Dois ambientes integrados. Uma única plataforma.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-brand text-white"
                  : "bg-surface-muted text-body hover:bg-section-alt"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* relative + overflow-hidden: os cards flutuantes abaixo usam
            posição absoluta com deslocamento negativo (-top-8 etc). Sem
            isso, em telas estreitas eles vazam pra fora do container e
            ficam cortados pelo overflow-x-hidden global da página — o
            bug da sua captura. Agora eles ficam contidos aqui, e somem
            de vez abaixo de md: (ver mais adiante). */}
        <div className="relative overflow-hidden md:overflow-visible">

          <BrowserWindowFrame
            url={tabUrls[activeTab]}
            variant="light"
            className="shadow-[0px_0px_9.4px_1px_rgba(0,0,0,0.6)]"
          >
            <div className="bg-[#f9fafb] p-8">

              {activeTab === "manager" && (
                <div className="space-y-6">
                  {/* CORREÇÃO: era grid-cols-2 direto, apertado demais no
                      mobile e forçando os números (28px bold) a quebrar/
                      vazar da caixa. Agora 1 coluna no mobile, 2 a partir
                      de sm:, 4 a partir de lg:. Números com whitespace-nowrap
                      + fonte um pouco menor no mobile pra caber numa linha. */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5 min-w-0">
                      <p className="text-[13px] text-[#6b6b6b] mb-2">Total Alunos</p>
                      <p className="text-[22px] sm:text-[28px] font-bold text-[#0d0d0d] whitespace-nowrap">1,248</p>
                    </div>
                    <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5 min-w-0">
                      <p className="text-[13px] text-[#6b6b6b] mb-2">Receita Mensal</p>
                      <p className="text-[22px] sm:text-[28px] font-bold text-[#0d0d0d] whitespace-nowrap">R$ 89k</p>
                    </div>
                    <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5 min-w-0">
                      <p className="text-[13px] text-[#6b6b6b] mb-2">Frequência Média</p>
                      <p className="text-[22px] sm:text-[28px] font-bold text-[#0d0d0d] whitespace-nowrap">3.2x/sem</p>
                    </div>
                    <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5 min-w-0">
                      <p className="text-[13px] text-[#6b6b6b] mb-2">Inadimplentes</p>
                      <p className="text-[22px] sm:text-[28px] font-bold text-[#0d0d0d] whitespace-nowrap">32</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-6">
                    <h3 className="text-[16px] font-semibold text-[#0a0a0a] mb-4">Lista de Alunos</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Maria Silva", plan: "Premium", time: "Hoje às 07:30", initial: "M", status: "Em dia" },
                        { name: "João Santos", plan: "Basic", time: "Ontem às 08:00", initial: "J", status: "Em dia" },
                        { name: "Ana Costa", plan: "Premium", time: "02/03 às 07:30", initial: "A", status: "Pendente" },
                        { name: "Pedro Oliveira", plan: "Premium", time: "Hoje às 06:45", initial: "P", status: "Em dia" },
                      ].map((student) => (
                        <div key={student.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#f5f5f5]">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Avatar initials={student.initial} size="md" />
                            <div className="min-w-0">
                              <p className="text-[14px] font-medium text-[#0a0a0a] truncate">{student.name}</p>
                              <p className="text-[12px] text-[#6b6b6b] truncate">{student.plan} • {student.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap ml-13 sm:ml-0">
                            <Badge variant="success" size="sm">Ativo</Badge>
                            <Badge variant={student.status === "Em dia" ? "success" : "danger"} size="sm">
                              {student.status}
                            </Badge>
                            <button className="bg-[#f5f5f5] px-4 py-2 rounded-[10px] text-[13px] font-medium text-[#0d0d0d] hover:bg-[#e5e5e5] transition-colors">
                              Detalhes
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "finance" && (
                <div className="flex items-center justify-center py-16">
                  <p className="text-[18px] text-[#6b6b6b]">Visualização de Finanças</p>
                </div>
              )}

              {activeTab === "student" && (
                <div className="flex items-center justify-center py-8">
                  <div className="relative w-[260px]">
                    <div className="relative bg-[#3f3f46] rounded-[44px] p-[10px] shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
                      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[72px] h-[24px] bg-[#27272a] rounded-full z-10 pointer-events-none" />
                      <div className="rounded-[36px] overflow-hidden bg-white" style={{ height: "520px" }}>
                        <div
                          className="h-full overflow-y-auto scrollbar-hide"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          <div className="h-[44px]" />
                          <img
                            src={appAlunoImage}
                            alt="App do Aluno"
                            className="w-full h-auto block"
                            draggable={false}
                          />
                        </div>
                      </div>
                      <div className="absolute right-[-3px] top-[110px] w-[3px] h-[52px] bg-[#52525c] rounded-r-sm" />
                      <div className="absolute left-[-3px] top-[80px] w-[3px] h-[32px] bg-[#52525c] rounded-l-sm" />
                      <div className="absolute left-[-3px] top-[122px] w-[3px] h-[32px] bg-[#52525c] rounded-l-sm" />
                    </div>
                    <div className="absolute inset-[10px] rounded-[36px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <p className="text-center text-[11px] text-[#6b6b6b] mt-3 select-none">
                      ↕ Role para explorar
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "assessments" && (
                <div className="flex items-center justify-center py-16">
                  <p className="text-[18px] text-[#6b6b6b]">Visualização de Avaliações</p>
                </div>
              )}

            </div>
          </BrowserWindowFrame>

          {/* Cards flutuantes decorativos — escondidos abaixo de md:.
              São posicionados absolute com deslocamento negativo; numa tela
              estreita eles ultrapassam a borda do container e não tem como
              deixá-los fluidos sem redesenhar. Mesmo raciocínio do LeftPanel
              do login: esconder o decorativo em vez de forçar caber. */}
          <div className="hidden md:flex absolute -top-8 right-0 bg-surface rounded-2xl shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] border-t-4 border-brand p-4 items-center gap-2 w-[134px]">
            <div className="w-5 h-5 flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                <path d="M2.5 10C2.5 10 5.83333 3.33334 10 3.33334C14.1667 3.33334 17.5 10 17.5 10C17.5 10 14.1667 16.6667 10 16.6667C5.83333 16.6667 2.5 10 2.5 10Z" stroke="#E8001C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 2.5V6.66667H13.3333" stroke="#E8001C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.0917 6.90833C11.9583 5.625 10.5417 5 10 5C7.5 5 5.41667 7.5 5.41667 10C5.41667 12.5 7.5 15 10 15C12.5 15 14.5833 12.5 14.5833 10" stroke="#E8001C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.66667 13.3333H2.5V17.5" stroke="#E8001C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-ink text-[13px] font-semibold leading-[19.5px]">Atualização</p>
              <p className="text-body text-[11px] leading-[16.5px]">em tempo real</p>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-0 -left-8 bg-surface rounded-2xl shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] border-t-4 border-success p-4 items-center gap-2 w-[164px]">
            <div className="w-5 h-5 flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                <path d="M2.5 5.83333C2.5 4.91667 2.5 4.45833 2.69167 4.10833C2.85833 3.8 3.13333 3.525 3.44167 3.35833C3.79167 3.16667 4.25 3.16667 5.16667 3.16667H14.8333C15.75 3.16667 16.2083 3.16667 16.5583 3.35833C16.8667 3.525 17.1417 3.8 17.3083 4.10833C17.5 4.45833 17.5 4.91667 17.5 5.83333V10.8333C17.5 11.75 17.5 12.2083 17.3083 12.5583C17.1417 12.8667 16.8667 13.1417 16.5583 13.3083C16.2083 13.5 15.75 13.5 14.8333 13.5H5.16667C4.25 13.5 3.79167 13.5 3.44167 13.3083C3.13333 13.1417 2.85833 12.8667 2.69167 12.5583C2.5 12.2083 2.5 11.75 2.5 10.8333V5.83333Z" stroke="#1A9E5A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.66667 17.5H13.3333" stroke="#1A9E5A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 13.5V17.5" stroke="#1A9E5A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-ink text-[13px] font-semibold leading-[19.5px]">Acesso em</p>
              <p className="text-body text-[11px] leading-[16.5px]">qualquer dispositivo</p>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
}
