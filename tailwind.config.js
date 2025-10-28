const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
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
      fontFamily: {
        heading: ["var(--font-heading)", "Manrope", "sans-serif"],
        body: ["var(--font-body)", "Work Sans", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "#ffe6e2",
          100: "#ffd3cc",
          200: "#ffb0a3",
          300: "#ff8c7b",
          400: "#ff6f61",
          500: "#f74f41",
          600: "#d13e32",
          700: "#a92f25",
          800: "#7f2119",
          900: "#55150f"
        },
        secondary: {
          DEFAULT: "var(--color-secondary)"
        },
        accent: {
          DEFAULT: "var(--color-accent)"
        },
        bg: {
          DEFAULT: "var(--color-bg)"
        },
        surface: {
          DEFAULT: "var(--color-surface)"
        },
        muted: {
          DEFAULT: "var(--color-muted)"
        },
        success: {
          DEFAULT: "var(--color-success)"
        },
        warning: {
          DEFAULT: "var(--color-warning)"
        },
        danger: {
          DEFAULT: "var(--color-danger)"
        },
        info: {
          DEFAULT: "var(--color-info)"
        },
        dark: {
          DEFAULT: "var(--color-dark)"
        },
        light: {
          DEFAULT: "var(--color-light)"
        }
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        strong: "var(--shadow-strong)",
        glow: "var(--shadow-glow)"
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-sunrise": "var(--gradient-sunrise)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      ringColor: {
        DEFAULT: "var(--ring)"
      },
      ringOffsetColor: {
        DEFAULT: "var(--color-bg)"
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-inverse": { color: "var(--text-inverse)" },
        ".text-primary": { color: "var(--text-primary)" },
        ".text-secondary": { color: "var(--text-secondary)" },
        ".surface": {
          backgroundColor: "var(--color-surface)"
        },
        ".card": {
          backgroundColor: "var(--color-surface)",
          boxShadow: "var(--shadow-soft)",
          borderRadius: "0.75rem",
          border: "1px solid var(--color-border)"
        },
        ".focus-ring": {
          outline: "none",
          boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 40%, transparent)"
        },
        ".bg-hero-1": {
          backgroundImage: "var(--gradient-primary)"
        },
        ".bg-hero-2": {
          backgroundImage: "var(--gradient-accent)"
        }
      });
    })
  ]
};
