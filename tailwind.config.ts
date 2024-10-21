import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#171717",
        primary: "#b2741d",
      },
    },
  },
  plugins: [],
};

export default config;
