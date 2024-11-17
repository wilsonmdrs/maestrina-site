import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    fontFamily: {
      Fahkwang: ["Fahkwang", "serif"],
    },
  },
  theme: {
    colors: {
      primary: "#C69940",
      secondary: "#BBBDBF",
      background: {
        primary: "#1E1E1E",
        secondary: "#2B2B2B",
      },
      text: {
        enabled: "#C4C4CC",
        dark: "#2B2B2B",
        ["dark-800"]: "#323238",
      },
    },
  },
  plugins: [],
});

export default config;
