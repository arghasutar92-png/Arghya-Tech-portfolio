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

function titleFromSlug(slug: string): string {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function categoryFromSlug(slug: string): Project["category"] {
  const value = slug.toLowerCase();
  if (value.includes("store") || value.includes("digital-store")) {
    return "Digital Stores";
  }
  if (value.includes("ecommerce") || value.includes("e-commerce") || value.includes("shop")) {
    return "E-commerce";
  }
  return "Landing Pages";
}

export async function getProjectsData(): Promise<Project[]> {
  const [images, videos] = await Promise.all([
    readMediaDirectory("images"),
    readMediaDirectory("videos"),
  ]);
  const projectKeys = new Set([
    ...images.map(({ key }) => key),
    ...videos.map(({ key }) => key),
  ]);

  return [...projectKeys]
    .sort((a, b) => a.localeCompare(b))
    .map((slug) => ({
      slug,
      title: titleFromSlug(slug),
      description: "",
      technologies: [],
      category: categoryFromSlug(slug),
      images: images.filter((item) => item.key === slug).map((item) => item.media),
      videos: videos.filter((item) => item.key === slug).map((item) => item.media),
    }));
}
