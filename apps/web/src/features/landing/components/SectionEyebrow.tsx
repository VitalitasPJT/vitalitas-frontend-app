import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p className={`text-[13px] font-medium text-brand tracking-[1.3px] uppercase ${className}`.trim()}>
      {children}
    </p>
  );
}
