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
        navy: { 950: "#050816", 900: "#090d1f", 800: "#0d1530" },
        neon: { 400: "#38bdf8", 500: "#0ea5e9" },
        gold: { 300: "#fde68a", 400: "#fbbf24", 500: "#d97706" },
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.18)",
        gold: "0 0 24px rgba(251, 191, 36, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
