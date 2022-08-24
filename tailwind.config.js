/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#746ae2",
          "secondary": "#58fcc5",
          "accent": "#ea9fb3",
          "neutral": "#23272F",
          "base-100": "#444",
          "info": "#4397DF",
          "success": "#14AD73",
          "warning": "#B59008",
          "error": "#F4211A",
        },
      },
    ],
  },
};