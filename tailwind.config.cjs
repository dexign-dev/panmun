/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',   
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)'    
      }
    },
  },
  plugins: [],
});
