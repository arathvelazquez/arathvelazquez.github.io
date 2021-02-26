module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#FCA311',
        'secondary': '#14213D'
      },
      fontFamily: {
        'main-title': ['Poppins']
      },
      fontSize: {
        'main-title': '72px'
      },
      screens: {
        'xs': '475px'
      },
      boxShadow: {
        link: '0 -2px 0 0 rgb(252, 163, 17) inset',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
