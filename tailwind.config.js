/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        bgmap: "url('/public/map.webp')",
      },
    },
  },
  plugins: [],
};
