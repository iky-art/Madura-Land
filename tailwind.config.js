/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0707",
        surface: "#151010",
        "surface-hover": "#1D1616",
        border: "#2A1E1E",
        text: "#F5F1EE",
        muted: "#9C8B88",
        accent: "#E6332B",
        "accent-dark": "#7A1512",
        "accent-hover": "#F04A41",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        shell: "1120px",
      },
    },
  },
  plugins: [],
};
