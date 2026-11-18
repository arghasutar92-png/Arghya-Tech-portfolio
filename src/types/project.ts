export type ProjectMedia = {
  src: string;
  name: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: "Landing Pages" | "E-commerce" | "Digital Stores";
  liveUrl?: string;
  githubUrl?: string;
  images: ProjectMedia[];
  videos: ProjectMedia[];
};
