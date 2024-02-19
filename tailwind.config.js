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
        page: "#EDEDED",
        grey: "#7A7A7A",
      },
      backgroundImage: {
        hero: "url(../assets/hero.jpg)",
      },
    },
  },
  plugins: [],
};
