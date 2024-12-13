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
        ink: {
          900: "#14171F",
          800: "#2C313D",
          600: "#4F5569",
          400: "#9096A6",
        },
        paper: {
          100: "#FFFFFF",
          200: "#F8F9FB",
          300: "#F1F3F7",
        },
        accent: {
          100: "#E6E7FE",
          500: "#120ef4",
          600: "#0F0CD8",
        },
        success: "#34D399",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        xs: "clamp(0.75rem, 0.75vw, 0.875rem)",
        sm: "clamp(0.875rem, 0.875vw, 1rem)",
        base: "clamp(1rem, 1vw, 1.125rem)",
        lg: "clamp(1.125rem, 1.125vw, 1.25rem)",
        xl: "clamp(1.25rem, 1.5vw, 1.5rem)",
        "2xl": "clamp(1.5rem, 2vw, 2rem)",
        "3xl": "clamp(2rem, 3vw, 3rem)",
        "4xl": "clamp(2.5rem, 4vw, 4rem)",
        hero: "clamp(3.5rem, 6vw, 5.5rem)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.02em",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.2",
        normal: "1.5",
        relaxed: "1.75",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      spacing: {
        "3xs": "0.25rem",
        "2xs": "0.5rem",
        xs: "0.75rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        sm: "0 1px 2px rgb(0 0 0 / 0.04)",
        DEFAULT: "0 2px 4px rgb(0 0 0 / 0.06)",
        lg: "0 8px 16px rgb(0 0 0 / 0.08)",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "80rem",
        },
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
