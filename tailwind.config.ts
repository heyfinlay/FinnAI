import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        mute: "var(--mute)",
        surface: "var(--surface)",
        panel: "var(--panel)",
        line: "var(--line)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(14, 24, 38, 0.08)",
        card: "0 14px 30px rgba(14, 24, 38, 0.06)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      backgroundImage: {
        "noise-grid": "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)",
      },
      backgroundSize: {
        "noise-grid": "26px 26px",
      },
    },
  },
  plugins: [],
};

export default config;
