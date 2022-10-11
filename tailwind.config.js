/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Roboto", "sans-serif"],
      },
      // colors: {
      //   colorOne: "#2f3e46",
      //   colorTwo: "#2f3e46",
      //   colorThree: "#354f52",
      //   colorFour: "#52796f",
      //   colorFive: "#84a98c",
      // },
      backgroundImage: {
        bgmap: "url('/public/map.webp')",
      },
      dropShadow: {
        "3xl": "0px 35px 35px rgba(0, 0, 0, 0.20)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
