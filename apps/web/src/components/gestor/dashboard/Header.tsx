import { Link } from 'react-router-dom';

interface HeaderAction {
  label: string;
  to?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
}

interface HeaderProps {
  title: string;
  subtitle: string;
  actions?: HeaderAction[];
}

export function Header({ title, subtitle, actions = [] }: HeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-[30px] font-medium leading-9 text-[#0a0a0a]">{title}</h1>
        <p className="text-base text-[#6a7282]">{subtitle}</p>
      </div>

      {actions.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {actions.map((action) => {
            const isPrimary = action.variant === 'primary';

            const className = isPrimary
              ? 'bg-[#ee2b47] h-9 px-4 py-2 rounded-lg border border-[rgba(0,0,0,0.1)] shadow-[0px_0px_7px_1px_rgba(0,0,0,0.4)] flex items-center gap-2 hover:bg-[#d9273f] transition-colors'
              : 'bg-white h-9 px-4 py-2 rounded-lg border border-[rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-gray-50 transition-colors';

            const icon = isPrimary ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M8 2a4 4 0 1 0 0 8A4 4 0 0 0 8 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M13.333 14c0-2.577-2.388-4.667-5.333-4.667S2.667 11.423 2.667 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M12.667 5.333V9.333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M14.667 7.333H10.667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M2.667 10.667L8 2l5.333 8.667H2.667Z" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M2.667 10.667H13.333V13.333H2.667Z" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M8 10V2" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            );

            const label = (
              <span className={`text-sm ${isPrimary ? 'font-bold text-white' : 'font-medium text-[#0a0a0a]'}`}>
                {action.label}
              </span>
            );

            if (action.to) {
              return (
                <Link key={action.label} to={action.to} className={className}>
                  {icon}{label}
                </Link>
              );
            }

            return (
              <button key={action.label} onClick={action.onClick} className={className}>
                {icon}{label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
