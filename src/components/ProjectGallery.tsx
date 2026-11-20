import Image from "next/image";
import type { Project } from "@/types/project";

import Link from "next/link";

export function ProjectGallery({ project }: { project: Project }) {
  if (project.images.length === 0 && project.videos.length === 0) {
    return (
      <div className="flex min-h-24 items-center justify-center rounded-xl border border-dashed border-white/10">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Live Demo
          </a>
        ) : (
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Live Demo
          </Link>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {project.images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={`${project.title} screenshot`}
            width={1600}
            height={900}
            className="h-auto w-full rounded-xl border border-white/10 object-cover"
          />
        ))}
        {project.videos.map((video) => (
          <video
            key={video.src}
            src={video.src}
            controls
            preload="metadata"
            className="w-full rounded-xl border border-white/10"
          />
        ))}
      </div>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Live Demo
        </a>
      )}
    </div>
  );
}
