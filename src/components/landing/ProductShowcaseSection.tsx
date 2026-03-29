import { useState } from "react";
import imgContainer1 from "../../assets/imgs/hugo.png";

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"manager" | "finance" | "student" | "assessments">("manager");

  const tabs = [
    { id: "manager" as const, label: "Painel do Gestor" },
    { id: "finance" as const, label: "Financeiro" },
    { id: "student" as const, label: "App do Aluno" },
    { id: "assessments" as const, label: "Avaliações" }
  ];

  return (
    <section id="produto" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[13px] font-medium text-[#e8001c] tracking-[1.3px] uppercase mb-4">
            O PRODUTO
          </p>
          <h2 className="text-[36px] font-bold text-[#0d0d0d] mb-4">
            Veja o Vitalitas em ação
          </h2>
          <p className="text-[18px] text-[#6b6b6b]">
            Dois ambientes integrados. Uma única plataforma.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-colors ${activeTab === tab.id
                ? "bg-[#e8001c] text-white"
                : "bg-[#f5f5f5] text-[#6b6b6b] hover:bg-[#e5e5e5]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-[16px] shadow-[0px_0px_9.4px_1px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Browser Header */}
          <div className="bg-[#f5f5f5] h-[48px] flex items-center px-4 gap-6">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="bg-white px-3 py-1.5 rounded flex-1 max-w-3xl">
              <span className="text-[12px] text-[#6b6b6b]">
                {activeTab === "manager" && "app.vitalitas.com.br/admin_dashboard"}
                {activeTab === "finance" && "app.vitalitas.com.br/financeiro"}
                {activeTab === "student" && "app.vitalitas.com.br/app"}
                {activeTab === "assessments" && "app.vitalitas.com.br/avaliacoes"}
              </span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-[#f9fafb] p-8">
            {activeTab === "manager" && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5">
                    <p className="text-[13px] text-[#6b6b6b] mb-2">Total Alunos</p>
                    <p className="text-[28px] font-bold text-[#0d0d0d]">1,248</p>
                  </div>
                  <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5">
                    <p className="text-[13px] text-[#6b6b6b] mb-2">Receita Mensal</p>
                    <p className="text-[28px] font-bold text-[#0d0d0d]">R$ 89k</p>
                  </div>
                  <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5">
                    <p className="text-[13px] text-[#6b6b6b] mb-2">Frequência Média</p>
                    <p className="text-[28px] font-bold text-[#0d0d0d]">3.2x/sem</p>
                  </div>
                  <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-5">
                    <p className="text-[13px] text-[#6b6b6b] mb-2">Inadimplentes</p>
                    <p className="text-[28px] font-bold text-[#0d0d0d]">32</p>
                  </div>
                </div>

                {/* Students List */}
                <div className="bg-white rounded-[14px] border border-[rgba(170,170,170,0.67)] p-6">
                  <h3 className="text-[16px] font-semibold text-[#0a0a0a] mb-4">Lista de Alunos</h3>
                  <div className="space-y-3">
                    {/* Student Row 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#f5f5f5]">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[14px] font-semibold text-white">M</span>
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-[#0a0a0a]">Maria Silva</p>
                          <p className="text-[12px] text-[#6b6b6b]">Premium • Hoje às 07:30</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap ml-13 sm:ml-0">
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Ativo</span>
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Em dia</span>
                        <button className="bg-[#f5f5f5] px-4 py-2 rounded-[10px] text-[13px] font-medium text-[#0d0d0d] hover:bg-[#e5e5e5] transition-colors">
                          Detalhes
                        </button>
                      </div>
                    </div>

                    {/* Student Row 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#f5f5f5]">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[14px] font-semibold text-white">M</span>
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-[#0a0a0a]">João Santos</p>
                          <p className="text-[12px] text-[#6b6b6b]">Basic • Ontem às 08:00</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap ml-13 sm:ml-0">
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Ativo</span>
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Em dia</span>
                        <button className="bg-[#f5f5f5] px-4 py-2 rounded-[10px] text-[13px] font-medium text-[#0d0d0d] hover:bg-[#e5e5e5] transition-colors">
                          Detalhes
                        </button>
                      </div>
                    </div>

                    {/* Student Row 3 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#f5f5f5]">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[14px] font-semibold text-white">M</span>
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-[#0a0a0a]">Ana Costa</p>
                          <p className="text-[12px] text-[#6b6b6b]">Premium • 02/03 às 07:30</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap ml-13 sm:ml-0">
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Ativo</span>
                        <span className="text-[12px] font-medium text-[#ff0000] bg-[#FFE8E8] px-3 py-1 rounded-full">Pendente</span>
                        <button className="bg-[#f5f5f5] px-4 py-2 rounded-[10px] text-[13px] font-medium text-[#0d0d0d] hover:bg-[#e5e5e5] transition-colors">
                          Detalhes
                        </button>
                      </div>
                    </div>

                    {/* Student Row 4 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#f5f5f5]">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-[#e8001c] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[14px] font-semibold text-white">M</span>
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-[#0a0a0a]">Pedro Oliveira</p>
                          <p className="text-[12px] text-[#6b6b6b]">Premium • Hoje às 06:45</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap ml-13 sm:ml-0">
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Ativo</span>
                        <span className="text-[12px] font-medium text-[#1a9e5a] bg-[#d4edda] px-3 py-1 rounded-full">Em dia</span>
                        <button className="bg-[#f5f5f5] px-4 py-2 rounded-[10px] text-[13px] font-medium text-[#0d0d0d] hover:bg-[#e5e5e5] transition-colors">
                          Detalhes
                        </button>
                      </div>
                    </div>
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
              <div className="flex items-center justify-center py-16">
                <p className="text-[18px] text-[#6b6b6b]">Visualização do App do Aluno</p>
              </div>
            )}

            {activeTab === "assessments" && (
              <div className="flex items-center justify-center py-16">
                <p className="text-[18px] text-[#6b6b6b]">Visualização de Avaliações</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
