import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`} {...props}>
      {children}
    </section>
  );
}
