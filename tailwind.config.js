/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          rose: "#f43f5e",
          amber: "#f59e0b",
        },
      },
      animation: {
        "grid-fade": "gridFade 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        gridFade: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
