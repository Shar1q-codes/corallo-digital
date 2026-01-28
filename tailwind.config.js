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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        elevated: "var(--color-surface-elevated)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)"
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        ring: "var(--ring)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        md: "var(--shadow-md)",
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
        ".text-muted": { color: "var(--text-muted)" },
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
