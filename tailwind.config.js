/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

