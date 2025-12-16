/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7821A6", // Sample Purple
        secondary: "#F4EBFF", // Sample Light Purple
        purpleColor: "#6941C6", // Sample Dark Purple
        "light-bg": "#FAFAFA",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      boxShadow: {
        large: "0px 10px 40px -10px rgba(0,0,0,0.1)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        neon: "0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 1, filter: "brightness(100%)" },
          "50%": { opacity: 0.8, filter: "brightness(150%)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
