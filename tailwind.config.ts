import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius-base)",
      },
      fontFamily: {
        sans: ["var(--font-family-base)"],
      },
    },
  },
  plugins: [],
};
export default config;
