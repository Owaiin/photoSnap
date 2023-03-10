/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["DM Sans", "sans-serif"],
      },
      minHeight: {
        500: "50vh",
      },
      brightness: {
        full: "100",
      },
    },
  },
  plugins: [],
};
