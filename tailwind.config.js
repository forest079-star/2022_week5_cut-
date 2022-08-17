const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{html,ejs}"
  ],
  theme: {
    // screens: {
    //   sm: '540px',
    //   md: '720px',
    //   lg: '960px',
    //   xl: '1140px',
    //   '2xl': '1320px'
    // },
    // fontSize: {
    //   sm: ['14px', '21px'],
    //   base: ['16px', '24px'],
    //   lg: ['18px', '27px'],
    //   xl: ['20px', '30px'],
    //   '2xl': ['24px', '36px'],
    //   '3xl': ['30px', '45px'],
    //   '4xl': ['36px', '54px'],
    //   '5xl': ['48px', '72px'],
    //   '6xl': ['60px', '90px'],
    //   '7xl': ['72px', '108px'],
    //   '8xl': ['96px', '144px'],
    //   '9xl': ['128px', '192px'],
    // },
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        'primary': {
          'dark': '#',
          DEFAULT: '#',
          'light': '#'
        }
      },
      fontSize: {
        // '3xxl': ['32px', '48px'],
        // '4xxl': ['42px', '63px'],
        // '6xxl': ['64px', '96px']
      },
      dropShadow: {
        // 'card-shadow': '0px 2px 6px rgba(0, 0, 0, 0.29)'
      }
    },
    container: {
      center: true, // 水平置中
      // padding: '12px', // 水平間距
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}