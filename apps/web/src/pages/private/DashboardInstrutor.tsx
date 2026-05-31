import React from 'react'
import StatCard from '../../components/UI/StatCard'
import NotificationItem, { type NotificationType } from '../../components/UI/NotificationItem'
import StudentListItem from '../../components/UI/StudentListItem'
import AppointmentCard, { type AppointmentStatus } from '../../components/UI/AppointmentCard'
import CalendarStrip from '../../components/UI/CalendarStrip'
import AgendaItem from '../../components/UI/AgendaItem'
import HeaderInstrutor from '../../components/UI/HeaderInstrutor'

// ---------------------------------------------------------------------------
// DADOS MOCKADOS
// ---------------------------------------------------------------------------

/**
 * TODO: buscar do endpoint GET /instrutor/stats
 */
const STATS = [
  {
    id: 'alunos',
    iconGradient: 'linear-gradient(135deg, #FB2C36 0%, #E7000B 100%)',
    value: 42,
    label: 'Alunos Ativos',
    subtitle: '+5 este mês',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
        <path d="M2 21C2 17.134 5.134 14 9 14H15C18.866 14 22 17.134 22 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 8C20.105 8 21 8.895 21 10C21 11.105 20.105 12 19 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'avaliacoes',
    iconGradient: 'linear-gradient(135deg, #FF6900 0%, #F54900 100%)',
    value: 3,
    label: 'Avaliações Hoje',
    subtitle: '1 concluída',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="white" strokeWidth="2" />
        <path d="M16 2V6M8 2V6M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'impedancias',
    iconGradient: 'linear-gradient(135deg, #AD46FF 0%, #9810FA 100%)',
    value: 8,
    label: 'Impedâncias',
    subtitle: '3 pendentes',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'proximas',
    iconGradient: 'linear-gradient(135deg, #2B7FFF 0%, #155DFC 100%)',
    value: 12,
    label: 'Próximas Avaliações',
    subtitle: 'próximos 7 dias',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="white" strokeWidth="2" />
        <path d="M16 2V6M8 2V6M3 10H21M8 15H16M8 19H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

/** TODO: buscar do endpoint GET /instrutor/notificacoes?limit=3 */
const NOTIFICATIONS: { id: string; type: NotificationType; title: string; time: string }[] = [
  { id: '1', type: 'assessment', title: 'Avaliação agendada - Rafael Santos', time: '15 min' },
  { id: '2', type: 'message', title: 'Mensagem do administrador', time: '1h atrás' },
  { id: '3', type: 'alert', title: 'Impedância vencida - Mariana Lima', time: '2h atrás' },
]

/** TODO: buscar do endpoint GET /instrutor/alunos/recentes?limit=4 */
const RECENT_STUDENTS = [
  { id: '1', name: 'Rafael Santos', statusText: 'Treino concluído', nextEval: '15/04', isOnline: true },
  { id: '2', name: 'Mariana Lima', statusText: 'Avaliação pendente', nextEval: '05/04', isOnline: false },
  { id: '3', name: 'Lucas Oliveira', statusText: 'Em treino', nextEval: '20/04', isOnline: true },
  { id: '4', name: 'Fernanda Costa', statusText: 'Impedância realizada', nextEval: '10/04', isOnline: false },
]

/** TODO: buscar do endpoint GET /instrutor/avaliacoes/proximas */
const UPCOMING: { id: string; name: string; type: string; time: string; status: AppointmentStatus }[] = [
  { id: '1', name: 'Bruno Martins', type: 'Impedância', time: '14:30', status: 'atrasado' },
  { id: '2', name: 'Amanda Silva', type: 'Avaliação Física', time: '16:30', status: 'no_prazo' },
  { id: '3', name: 'Diego Rocha', type: 'Reavaliação', time: '18:00', status: 'agendado' },
]

/**
 * TODO: gerar dinamicamente a partir de new Date()
 * e marcar hasEvent via GET /instrutor/agenda/semana
 */
const CALENDAR_DAYS = [
  { label: 'Dom', day: 1, hasEvent: false, isToday: false },
  { label: 'Seg', day: 2, hasEvent: false, isToday: false },
  { label: 'Ter', day: 3, hasEvent: true, isToday: false },
  { label: 'Qua', day: 4, hasEvent: false, isToday: false },
  { label: 'Qui', day: 5, hasEvent: true, isToday: false },
  { label: 'Sex', day: 6, hasEvent: true, isToday: true },
  { label: 'Sáb', day: 7, hasEvent: false, isToday: false },
]

/** TODO: buscar do endpoint GET /instrutor/agenda/hoje */
const TODAY_AGENDA = [
  { id: '1', time: '14:30', name: 'Bruno Martins', type: 'Impedância', color: 'red' as const },
  { id: '2', time: '16:30', name: 'Amanda Silva', type: 'Avaliação Física', color: 'green' as const },
  { id: '3', time: '18:00', name: 'Diego Rocha', type: 'Reavaliação', color: 'blue' as const },
]

/**
 * TODO: remover este mock quando integrar com useAuth()
 * Ex: const { user } = useAuth()
 */
const MOCK_USER = { name: 'Carlos Mendes', initials: 'CM', role: 'Instrutor' }

// ---------------------------------------------------------------------------
// PÁGINA
// ---------------------------------------------------------------------------

const DashboardInstrutor: React.FC = () => {
  const currentDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <div className="min-h-screen bg-[#E5E5E5]">

      {/* TopNav recebe os itens do Instrutor e o usuário mockado */}
      <HeaderInstrutor
        user={MOCK_USER}
        notificationCount={3}
        onNotificationClick={() => console.log('TODO: abrir drawer de notificações')}
        onSettingsClick={() => console.log('TODO: abrir página de configurações')}
      />

      <main className="px-[100px] py-[30px] flex flex-col gap-[30px]">

        {/* Título */}
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 leading-8">Dashboard</h1>
          <p className="text-sm text-zinc-500 capitalize">{currentDate}</p>
        </div>

        {/* LINHA 1 — Métricas */}
        <div className="grid grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              iconGradient={stat.iconGradient}
              value={stat.value}
              label={stat.label}
              subtitle={stat.subtitle}
              trend="up"
            />
          ))}
        </div>

        {/* LINHA 2 — Notificações + Alunos Recentes */}
        <div className="grid grid-cols-[378px_1fr] gap-6">

          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-zinc-900">Notificações</h2>
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full shadow-sm"
                style={{ background: 'linear-gradient(90deg, #FB2C36 0%, #E7000B 100%)' }}
              >
                3 novas
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {NOTIFICATIONS.map((n) => (
                <NotificationItem key={n.id} type={n.type} title={n.title} time={n.time} />
              ))}
            </div>
            <button className="text-center text-sm font-semibold text-[#E7000B] py-3 rounded-xl hover:bg-red-50 transition-colors">
              Ver todas notificações
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-zinc-900">Alunos Recentes</h2>
              <button className="text-sm font-semibold text-[#E7000B] hover:underline">
                Ver todos
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {RECENT_STUDENTS.map((s) => (
                <StudentListItem
                  key={s.id}
                  name={s.name}
                  statusText={s.statusText}
                  nextEval={s.nextEval}
                  isOnline={s.isOnline}
                />
              ))}
            </div>
          </div>
        </div>

        {/* LINHA 3 — Próximas Avaliações */}
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 px-6 pt-6 pb-2 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-zinc-900">Próximas Avaliações</h2>
          <div className="grid grid-cols-3 gap-4 pb-4">
            {UPCOMING.map((a) => (
              <AppointmentCard key={a.id} name={a.name} type={a.type} time={a.time} status={a.status} />
            ))}
          </div>
        </div>

        {/* LINHA 4 — Agenda de Hoje */}
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 px-6 pt-6 pb-2 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-zinc-900">Agenda de Hoje</h2>
          <CalendarStrip days={CALENDAR_DAYS} />
          <div className="border-t border-zinc-200 pt-4 flex flex-col gap-3">
            <span className="text-sm font-semibold text-zinc-900">Compromissos de hoje:</span>
            <div className="flex flex-col gap-2 pb-2">
              {TODAY_AGENDA.map((item) => (
                <AgendaItem key={item.id} time={item.time} name={item.name} type={item.type} color={item.color} />
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default DashboardInstrutor