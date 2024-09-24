/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // don't forget to add other files and directories
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neela-bank": {
          50: "#eef8ff",
          100: "#ddf0ff",
          200: "#b3e2ff",
          300: "#6fcdff",
          400: "#23b4ff",
          500: "#009aff",
          600: "#007add",
          700: "#0060b3",
          800: "#005193",
          900: "#013f71",
          950: "#012a50",
        },
      },
    },
  },
  plugins: [],
};
