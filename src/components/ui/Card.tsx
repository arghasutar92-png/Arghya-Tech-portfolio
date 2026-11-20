import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.10] bg-[#111827]/75 shadow-[0_12px_40px_rgba(2,6,23,.16)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(2,8,23,.38),0_0_24px_rgba(6,182,212,.05)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
