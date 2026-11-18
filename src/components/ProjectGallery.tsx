import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectGallery({ project }: { project: Project }) {
  if (project.images.length === 0 && project.videos.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        Add files to public/assets/images/{project.slug}/ or public/assets/videos/{project.slug}/.
      </p>
    );
  }

  return (
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
  );
}
