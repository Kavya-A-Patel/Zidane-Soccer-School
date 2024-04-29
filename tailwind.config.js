/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/Components/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "icon-bg-blue": "#004aad",
        "icon-bg-blue-invert": "#ffb552",
      },
    },
  },
  plugins: [],
};
