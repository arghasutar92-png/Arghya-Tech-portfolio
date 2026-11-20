"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const categories = ["All", "Landing Pages", "E-commerce", "Digital Stores"] as const;
type Category = (typeof categories)[number];
type Preview =
  | { type: "image"; src: string; name: string }
  | { type: "video"; src: string; name: string };

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [preview, setPreview] = useState<Preview | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!preview) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [preview]);

  return (
    <Section id="work" className="pb-24 pt-8">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Project <span className="text-amber-300">showcase</span>
          </h2>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                  : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {projects.length === 0 ? (
        <Card className="border-dashed p-8 sm:p-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Portfolio</p>
          <h3 className="text-2xl font-semibold">No projects to display</h3>
        </Card>
      ) : filteredProjects.length === 0 ? (
        <Card className="border-dashed p-8 text-center text-slate-400">
          No projects are available in this category yet.
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const previewImage = project.images[0];
            const previewVideo = project.videos[0];

            return (
              <Card
                key={project.slug}
                role={project.liveUrl ? "link" : undefined}
                tabIndex={project.liveUrl ? 0 : undefined}
                aria-label={project.liveUrl ? `Open ${project.title} live website` : undefined}
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                onKeyDown={(event) => {
                  if (project.liveUrl && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                className="group overflow-hidden cursor-pointer"
              >
                <button
                  type="button"
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-950 text-left"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (previewImage) {
                      setPreview({ type: "image", src: previewImage.src, name: previewImage.name });
                    } else if (previewVideo) {
                      setPreview({ type: "video", src: previewVideo.src, name: previewVideo.name });
                    }
                  }}
                  aria-label={`Open ${project.title} preview`}
                >
                  {previewImage ? (
                    <Image
                      src={previewImage.src}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : previewVideo ? (
                    <video
                      src={previewVideo.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-sm text-slate-500">
                      Media preview available soon
                    </div>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {previewVideo ? "View demo" : "View screenshot"}
                  </span>
                </button>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1 text-xs font-medium text-cyan-300">
                      {project.category}
                    </span>
                    {previewVideo && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setPreview({ type: "video", src: previewVideo.src, name: previewVideo.name });
                        }}
                        className="text-xs font-semibold text-amber-300 transition hover:text-amber-200"
                      >
                        Play demo
                      </button>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.description && (
                    <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
                  )}
                  {project.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs text-slate-400">
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex h-11 items-center justify-center rounded-lg bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <Link
                        href="#contact"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex h-11 items-center justify-center rounded-lg bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                      >
                        Live Demo
                      </Link>
                    )}
                    <Link
                      href="#contact"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-5 text-sm font-semibold text-amber-300 transition hover:border-amber-300"
                    >
                      Order Similar
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.name} preview`}
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPreview(null);
          }}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-slate-900 text-2xl text-white transition hover:border-cyan-400/40 sm:right-7 sm:top-7"
          >
            ×
          </button>

          <div className="relative h-[calc(100vh-2rem)] w-full max-w-6xl sm:h-[calc(100vh-4rem)]">
            {preview.type === "image" ? (
              <Image
                src={preview.src}
                alt={preview.name}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            ) : (
              <video
                src={preview.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full rounded-xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
