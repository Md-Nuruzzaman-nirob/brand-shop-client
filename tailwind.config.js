module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans', 'sans-serif'],
        Bebas: ['Bebas Neue', 'sans-serif'],
        Heebo: ['Heebo', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};