interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-[#18181b] mb-1">{title}</h1>
      <p className="text-sm text-[#71717a]">{subtitle}</p>
    </div>
  );
}
