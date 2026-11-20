import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: { 950: "#090D16", 900: "#111827", 800: "#1E293B" },
        electric: { 400: "#06B6D4", 500: "#0891B2" },
        gold: { 300: "#FCD34D", 400: "#F59E0B", 500: "#D97706" },
      },
      boxShadow: {
        glow: "0 0 32px rgba(6, 182, 212, 0.16)",
        gold: "0 0 24px rgba(245, 158, 11, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
