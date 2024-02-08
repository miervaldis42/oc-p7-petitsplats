/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Anton", "sans-serif"],
        text: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#FFD15B",
      },
    },
  },
  plugins: [],
};
