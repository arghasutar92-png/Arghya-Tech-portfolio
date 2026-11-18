import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-slate-900/45 backdrop-blur-sm transition duration-300 hover:border-sky-400/25 hover:shadow-[0_20px_60px_rgba(2,8,23,.35)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
