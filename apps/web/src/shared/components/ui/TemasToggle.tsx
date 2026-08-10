import { useTheme } from "@/contexts/useTheme";

interface ThemeToggleProps {
  /** 'float' = botão flutuante no canto (Landing/Login)
   *  'inline' = botão inline na sidebar */
  variant?: "float" | "inline";
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle({ variant = "float" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "float") {
    return (
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className="
          fixed bottom-6 right-6 z-50
          w-12 h-12 rounded-full
          bg-white dark:bg-[#18181b]
          border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]
          shadow-[0px_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]
          flex items-center justify-center
          text-[#18181b] dark:text-white
          hover:scale-110 active:scale-95
          transition-all duration-200 cursor-pointer
        "
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    );
  }

  // variant === "inline" — usado na sidebar
  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="
        flex items-center justify-center
        w-8 h-8 rounded-full shrink-0
        bg-transparent
        hover:bg-gray-100 dark:hover:bg-[#27272a]
        text-[#18181b] dark:text-white
        transition-colors cursor-pointer
      "
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
