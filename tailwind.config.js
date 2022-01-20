module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#87C121",
          // lighter: "#3DD381",
          // light: "#00B69E",
        },
        secondary: "#FF8300",
      },
    },
  },
  plugins: [],
};
