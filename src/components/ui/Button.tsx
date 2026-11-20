import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-cyan-500 text-slate-950 shadow-[0_0_24px_rgba(6,182,212,.16)] hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,.18)]",
    secondary: "border border-amber-400/35 bg-amber-400/[0.08] text-amber-300 hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-amber-400/[0.14]",
    ghost: "border border-white/10 bg-white/[0.03] text-slate-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white",
  };

  return (
    <button
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
