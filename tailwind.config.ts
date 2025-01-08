import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
      screens: {
        xl: "1024px",
      },
    },
    extend: {
      screens: {
        xs: "375px",
        xl: "1200px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        calistoga: ["var(--font-calistoga)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
