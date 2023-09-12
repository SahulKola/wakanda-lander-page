/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      accent: {
        500: "#0077C0",
        100: "#C7EEFF",
      },
      "dark-bg": "#1D242B",
    },
    extend: {},
  },
  plugins: [],
};
