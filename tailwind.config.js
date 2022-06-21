/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: "#b5b5b6",
        metal: "#be9461",
        darkText: "#222",
      },
    },
  },
  plugins: [],
};
