/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        lightorange: "#FFCF59",
        lightpurple: "#525FE1",
        lblack: "#212E39",
        white: "#FFFFFF",
        lightgray: "#D9D9D9",
        dblack: "#040724"
      },
      fontFamily:{
        nunito: ["Nunito", "sans-serif"],
        ptsans: ["PT+Sans", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

