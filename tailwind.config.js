/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        bgHeader: "url('../public/bg.png')",
      },
    },
  },
  plugins: [],
};
