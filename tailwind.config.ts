import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#3B82F6"
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: [],
  darkMode: "class"
};

export default config;
