import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "nice-green": "#9BE895",
        "nice-greens": {
          light: "#14532d",
          DEFAULT: '#06b6d4',
          dark: "#9BE895",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
