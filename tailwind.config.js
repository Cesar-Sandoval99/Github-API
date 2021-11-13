module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blueDark: "#082032", 
      gray: "#2C394B", 
      grayLight: "#334756", 
      orange: "#FF4C29",
      yellow: "#FFA400",
      gray2: "#AAA492",
      white: "#ffff",
      yellowLight: "#F8DF8B",
      blueLight: "#B2F9FC"
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
