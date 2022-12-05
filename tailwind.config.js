/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { max: "375px" },
      },
    },
  },
  plugins: [],
};
// ./src/**/*.{js,jsx,ts,tsx}
