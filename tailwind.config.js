/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
      colors: {
        primary: {
          400: "#A4FFAF",
        },
        accent: {
          400: "#FACD68",
        },
        neutral: {
          100: "#E6E5EA",
          400: "#5B5867",
          500: "#525159",
          900: "#0F0E14",
        },
      },
    },
  },
  plugins: [],
};
