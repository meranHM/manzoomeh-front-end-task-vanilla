/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        dana: ["Dana", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "brand-orange": "#FE9001",
        "gray-ultra-light": "#F0F0F0",
        "gray-faint": "#F2F2F2",
        "gray-light": "#C4C4C4",
        "gray-medium": "#D7D7D7",
        "gray-dark": "#737373",
        "gray-soft": "#E4E6E8",
        "deep-blue": "#013D68",
        "deep-blue-hover": "#03528A",
      },
      borderRadius: {
        "box": "32px",
        "pill": "50px",
      },
      boxShadow: {
        "card": "0px 10px 20px 0px #0000000D"
      },
      margin: {
        "30": "123px",
      }
    },
  },
  plugins: [],
}