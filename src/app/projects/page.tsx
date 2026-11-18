import { getProjectsData } from "@/data/projectsData";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <main className="min-h-screen text-zinc-50">
      <ProjectShowcase projects={projects} />
    </main>
  );
}
