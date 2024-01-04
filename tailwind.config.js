/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        "lila": "#c3b3ee",
        "dark": "#1b1b1b",
        "blue": "#b5cff8",
        // "gray-text": "#919191",
        "gray-text": "#ADADAD"
      },
      backgroundImage: {
        "bg-phone": "url('/src/landing/sections/section%201/images/Background.png')",
        "bg-phones": "url('/src/landing/sections/section%202/images/group6.png')",
        "bg-star": "url('/src/portraits/bgstar.png')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}