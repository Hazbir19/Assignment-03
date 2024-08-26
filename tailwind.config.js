/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      fontfamily: {},
      backgroundImage: {
        "discuss-section": "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
