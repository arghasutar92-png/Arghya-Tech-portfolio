type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandMark({ className = "", showWordmark = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-label="Argh Tech AT logo"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-sky-400/30 bg-slate-950 shadow-[0_0_24px_rgba(56,189,248,.16)]"
      >
        <svg
          viewBox="0 0 64 64"
          className="h-full w-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 32h8M48 32h8M32 8v8M32 48v8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="32" r="2" fill="#FBBF24" />
          <circle cx="56" cy="32" r="2" fill="#FBBF24" />
          <circle cx="32" cy="8" r="2" fill="#FBBF24" />
          <circle cx="32" cy="56" r="2" fill="#FBBF24" />
          <path d="M16 48 27 16h10l11 32h-9l-2.2-7H27l-2.2 7H16Zm14-15h5l-2.5-8-2.5 8Z" fill="#38BDF8" />
          <path d="M46 16h7v32h-7V16Z" fill="#FBBF24" />
        </svg>
      </span>
      {showWordmark && (
        <span className="text-base font-bold tracking-tight">
          <span className="text-white">Argh</span>{" "}
          <span className="text-amber-300">Tech</span>
        </span>
      )}
    </span>
  );
}
