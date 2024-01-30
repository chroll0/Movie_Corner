import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#fafafa",
          50: "#ffffff",
        },
        dark: {
          200: "#001e28e8",
          100: "#00141e",
          50: "#001e28",
        },
        icons: { 100: "#93a3c7", 200: "#fe4548" },
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(280px, 1fr))",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Roboto Slab", "sans-serif"],
      },
      boxShadow: {
        slide: "1px 1px 8px 1px #b3b3b3",
      },
      screens: { xsm: "470px" },
    },
  },
  plugins: [],
};
export default config;
