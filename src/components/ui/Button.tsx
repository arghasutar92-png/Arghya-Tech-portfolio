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
    primary: "bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-[0_0_24px_rgba(56,189,248,.18)]",
    secondary: "border border-amber-400/40 bg-amber-400/10 text-amber-300 hover:border-amber-300 hover:bg-amber-400/15",
    ghost: "border border-white/10 bg-white/[0.03] text-slate-200 hover:border-sky-400/40 hover:text-white",
  };

  return (
    <button
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
