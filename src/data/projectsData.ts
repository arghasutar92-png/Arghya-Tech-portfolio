import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";
import type { Project, ProjectMedia } from "@/types/project";

const IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".m4v", ".webm", ".ogg"]);

async function readMediaDirectory(directory: string): Promise<Array<{ key: string; media: ProjectMedia }>> {
  const absoluteDirectory = path.join(process.cwd(), "public", "assets", directory);

  try {
    return await walkDirectory(absoluteDirectory, directory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function walkDirectory(
  absoluteDirectory: string,
  publicDirectory: string,
  relativeDirectory = "",
): Promise<Array<{ key: string; media: ProjectMedia }>> {
  const entries = await readdir(path.join(absoluteDirectory, relativeDirectory), {
    withFileTypes: true,
  });
  const acceptedExtensions = publicDirectory === "images" ? IMAGE_EXTENSIONS : VIDEO_EXTENSIONS;
  const results: Array<{ key: string; media: ProjectMedia }> = [];

  for (const entry of entries) {
    const entryRelativePath = path.join(relativeDirectory, entry.name);

    if (entry.isDirectory()) {
      results.push(...await walkDirectory(absoluteDirectory, publicDirectory, entryRelativePath));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!acceptedExtensions.has(extension)) continue;

    const relativeParts = entryRelativePath.split(path.sep).filter(Boolean);
    const key = relativeParts.length > 1
      ? relativeParts[0]
      : path.basename(entry.name, extension);
    const publicPath = `/assets/${publicDirectory}/${entryRelativePath.split(path.sep).join("/")}`;

    results.push({
      key: key.toLowerCase(),
      media: { src: publicPath, name: entry.name },
    });
  }

  return results;
}

export async function getProjectsData(): Promise<Project[]> {
  const [images, videos] = await Promise.all([
    readMediaDirectory("images"),
    readMediaDirectory("videos"),
  ]);

  const actualProjects: Array<Omit<Project, "images" | "videos">> = [
    {
      slug: "lemon-squeezy-digital-store",
      title: "Lemon Squeezy Digital Store",
      description: "A modern digital storefront designed for selling e-books, tools, and digital goods.",
      technologies: ["Digital Store", "E-commerce"],
      category: "Digital Stores",
      liveUrl: "https://lemon-squeezy-store.vercel.app",
    },
    {
      slug: "autosync-ai-landing-page",
      title: "AutoSync AI Landing Page",
      description: "High-converting SaaS landing page for an AI automation and copywriting platform.",
      technologies: ["Landing Page", "SaaS"],
      category: "Landing Pages",
      liveUrl: "https://brilliant-torrone-400f76.netlify.app",
    },
    {
      slug: "e-commerce-landing-page-template",
      title: "E-Commerce Landing Page Template",
      description: "Ready-to-use e-commerce storefront and landing page template available for digital purchase.",
      technologies: ["E-commerce", "Landing Page"],
      category: "Digital Stores",
      liveUrl: "https://mintlink.in/m/e-commerce-landing-page-template-2cc8a593",
    },
    {
      slug: "deys-guinea-house",
      title: "Deys Guinea House",
      description: "Luxury gold and diamond jewellery showcase website for Bowbazar's premier jewellery destination.",
      technologies: ["Jewellery", "E-commerce"],
      category: "E-commerce",
      liveUrl: "https://deys-guinnea-house-web.vercel.app",
    },
  ];

  return actualProjects.map((project) => ({
    ...project,
    images: images.filter((item) => item.key === project.slug).map((item) => item.media),
    videos: videos.filter((item) => item.key === project.slug).map((item) => item.media),
  }));
}
