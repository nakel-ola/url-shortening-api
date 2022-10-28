/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          "dark-violet": "hsl(257, 27%, 26%)"
        },
        secondary: {
          red: "hsl(0, 87%, 67%)"
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          "grayish-violet": "hsl(257, 7%, 63%)",
          "very-dark-blue": "hsl(255, 11%, 22%)",
          "very-dark-violet": "hsl(260, 8%, 14%)",
        }
      },
      backgroundImage: {
        'shorten-desktop': "url('./src/assets/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('./src/assets/images/bg-shorten-mobile.svg')",
        'boost-desktop': "url('./src/assets/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('./src/assets/images/bg-boost-mobile.svg')",
      }
    },
  },
  plugins: [],
}
