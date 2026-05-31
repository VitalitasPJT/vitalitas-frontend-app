import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/imgs/logo_loginPage.png'

export interface NavItem {
    label: string
    path: string
    icon: React.ReactNode
}

interface TopNavProps {
    user: {
        name: string
        initials: string
        role: string
    }
    notificationCount?: number
    onNotificationClick?: () => void
    onSettingsClick?: () => void
}

export const INSTRUTOR_NAV_ITEMS: NavItem[] = [
    {
        label: 'Dashboard',
        path: '/dev/instrutor',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1.33" y="1.33" width="6" height="7.33" rx="1" fill="currentColor" />
                <rect x="8.67" y="1.33" width="6" height="4" rx="1" fill="currentColor" />
                <rect x="8.67" y="8.67" width="6" height="6" rx="1" fill="currentColor" />
                <rect x="1.33" y="10.67" width="6" height="4" rx="1" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: 'Alunos',
        path: '/user/instrutor/alunos',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M1 14C1 11.239 3.239 9 6 9H10C12.761 9 15 11.239 15 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        label: 'Avaliações',
        path: '/user/instrutor/avaliacoes',
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                    x="2.67"
                    y="2.67"
                    width="10.67"
                    height="12"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    d="M5.33 1.33V4M10.67 1.33V4M2.67 6.67H13.33M5.33 9.33H10.67"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
]

const LogoIcon = () => (
    <img
        src={logo}
        alt="Vitalitas"
        className="w-8 h-8 object-contain"
    />
)

const BellIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 2.25C6.1 2.25 3.75 4.6 3.75 7.5V12L2.25 13.5V14.25H15.75V13.5L14.25 12V7.5C14.25 4.6 11.9 2.25 9 2.25Z"
            stroke="#717182"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M7.5 15.75C7.5 16.578 8.172 17.25 9 17.25C9.828 17.25 10.5 16.578 10.5 15.75"
            stroke="#717182"
            strokeWidth="1.5"
        />
    </svg>
)

const SettingsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="#717182" strokeWidth="1.5" />
        <path
            d="M9 1.5V3M9 15V16.5M16.5 9H15M3 9H1.5M14.5 3.5L13.5 4.5M4.5 13.5L3.5 14.5M14.5 14.5L13.5 13.5M4.5 4.5L3.5 3.5"
            stroke="#717182"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
)

const HeaderInstrutor: React.FC<TopNavProps> = ({
    user,
    notificationCount = 0,
    onNotificationClick,
    onSettingsClick,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const isActive = (path: string) => {
        if (path === '/dev/instrutor') {
            return pathname === path
        }

        return pathname.startsWith(path)
    }

    return (
        <>
            <header className="sticky top-0 z-50 h-20 border-b border-zinc-200 bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 relative">
                <div className="flex h-full items-center justify-between">

                    {/* Logo */}
                    <button
                        type="button"
                        onClick={() => navigate('/dev/instrutor')}
                        className="flex items-center gap-3"
                    >
                        <LogoIcon />

                        <span className="hidden sm:block text-base font-black uppercase tracking-widest text-zinc-900">
                            VITALITAS
                        </span>
                    </button>

                    {/* Navegação */}
                    <nav className="hidden md:flex items-center rounded-full bg-zinc-200 p-1.5 gap-2 w-full max-w-[500px]">
                        {INSTRUTOR_NAV_ITEMS.map((item) => {
                            const active = isActive(item.path)

                            return (
                                <button
                                    key={item.path}
                                    type="button"
                                    onClick={() => navigate(item.path)}
                                    className={`
                                    flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2
                                    text-sm font-medium transition-all duration-200 cursor-pointer
                                    ${active
                                            ? 'bg-[#EE2B47] text-white shadow'
                                            : 'text-zinc-800 hover:bg-white'
                                        }
                                `}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            )
                        })}
                    </nav>

                    <button
                        type="button"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    {/* Usuário */}
                    <div className="hidden md:flex items-center gap-3">

                        <button
                            type="button"
                            onClick={onSettingsClick}
                            className="hidden lg:flex rounded-full p-2 transition-colors hover:bg-zinc-100"
                            aria-label="Configurações"
                        >
                            <SettingsIcon />
                        </button>

                        <button
                            type="button"
                            onClick={onNotificationClick}
                            className="relative rounded-full p-2 transition-colors hover:bg-zinc-100"
                            aria-label="Notificações"
                        >
                            <BellIcon />

                            {notificationCount > 0 && (
                                <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
                            )}
                        </button>

                        <div className="h-8 w-px bg-zinc-300" />

                        <div className="relative">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE2B47]">
                                <span className="text-xs font-bold text-white">
                                    {user.initials}
                                </span>
                            </div>

                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                        </div>

                        <div className="hidden lg:flex flex-col items-end">
                            <span className="text-sm font-semibold text-zinc-900">
                                {user.name}
                            </span>

                            <span className="text-xs text-zinc-500">
                                {user.role}
                            </span>
                        </div>

                    </div>
                </div>
            </header>

            {/* Menu mobile */}
            {isMenuOpen && (
                <nav className="absolute top-20 left-0 right-0 z-40 bg-white border-t border-zinc-200 flex flex-col p-4 gap-2 md:hidden shadow-lg">
                    {INSTRUTOR_NAV_ITEMS.map((item) => {
                        const active = isActive(item.path)

                        return (
                            <button
                                key={item.path}
                                type="button"
                                onClick={() => {
                                    navigate(item.path)
                                    setIsMenuOpen(false)
                                }}
                                className={`
                                    flex items-center gap-2 w-full rounded-md px-4 py-3
                                    text-left text-sm font-medium transition-all duration-200
                                    ${active
                                        ? 'bg-[#EE2B47] text-white'
                                        : 'text-zinc-800 hover:bg-zinc-100'
                                    }
                                `}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        )
                    })}

                    <div className="mt-4 border-t border-zinc-200 pt-4 flex items-center gap-3">
                        <div className="relative">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE2B47]">
                                <span className="text-xs font-bold text-white">
                                    {user.initials}
                                </span>
                            </div>

                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-zinc-900">
                                {user.name}
                            </span>

                            <span className="text-xs text-zinc-500">
                                {user.role}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                        <button
                            type="button"
                            onClick={onNotificationClick}
                            className="flex-1 rounded-lg border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-100"
                        >
                            Notificações
                        </button>

                        <button
                            type="button"
                            onClick={onSettingsClick}
                            className="flex-1 rounded-lg border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-100"
                        >
                            Configurações
                        </button>
                    </div>
                </nav>
            )}
        </>
    )
}

export default HeaderInstrutor