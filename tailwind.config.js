module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        "main":"#FD7E7E",
        "secondary":"#3A98EA"
      },
      fontFamily:{
        'main': ['Cabin Sketch', 'sans-serif']
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}