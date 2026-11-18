import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandMark({ className = "", showWordmark = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-label="Argh Tech AT logo"
        className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-sky-400/30 bg-white shadow-[0_0_24px_rgba(56,189,248,.16)]"
      >
        <Image
          src="/assets/images/argh-tech-logo.jpeg"
          alt="Argh Tech custom logo"
          fill
          sizes="40px"
          className="object-cover"
        />
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
