import Link from "next/link";
import { getProjectsData } from "@/data/projectsData";
import { ProjectGallery } from "@/components/ProjectGallery";

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <main className="min-h-screen px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-cyan-400">← Back home</Link>
        <h1 className="mb-10 mt-4 text-5xl font-bold">Projects</h1>
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-sky-400/20 bg-sky-400/[0.03] p-8 sm:p-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              Projects coming soon
            </p>
            <h2 className="text-2xl font-semibold">Add your work to showcase it here</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Upload screenshots to <code className="text-sky-300">public/assets/images/project-name/</code> and
              demo videos to <code className="text-sky-300">public/assets/videos/project-name/</code>.
              Projects will appear automatically.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-5 text-sm font-semibold text-amber-300 transition hover:border-amber-300"
            >
              Request a project
            </Link>
          </div>
        ) : (
          projects.map((project) => (
            <article key={project.slug} className="mb-10 rounded-2xl border border-white/10 p-6">
              <h2 className="mb-6 text-2xl font-semibold">{project.title}</h2>
              <ProjectGallery project={project} />
            </article>
          ))
        )}
      </div>
    </main>
  );
}
