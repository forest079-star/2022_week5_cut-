const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./app/**/*.{html,ejs}"
  ],
  theme: {
    container: {
      center: true,    // ~ 水平置中
      padding: '12px', // ~ 水平間距
    },
    screens: {
      // ~ 此次修改數值
      // sm: '768px',
      // md: '992px',
      // lg: '1440px',

      // ~ 原本數值
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px'

      // ~ 其他參考數值
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
      
    },
    // ~ font-size 其他參考數值 直接覆蓋寫法
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
        // gray: colors.gray,
        // 'primary': {
        //   'dark': '#',
        //   DEFAULT: '#',
        //   'light': '#'
        // }
        primary:'#62DB54',
        secondary:'#09ACF5',
        cyan: '#494755',
        'dark': {
          DEFAULT: '#000000',
          '100': '#2D2D2D',
          '200': '#2A1E17',
          '300': '#202020',
          '400': '#1C1C1C',
          '500': '#1A1A1A'
        },
        'gray': {
          DEFAULT: '#C1C1C1',
          '100': '#49475514',
          '200': '#00000019',
          '300': '#00000012',
          '400': '#CDD0C4',
          '500': '#00000034',
          '600': '#C1C1C1',
          '700': '#00000058',
          '800': '#909090',
          '900': '#7C7E77'
        },
      },
      listStyleType: {
        square: 'square' // ~ list 樣式
      },
      spacing:{
        '5px': '5px',
        '30px': '30px',
        '50px': '50px',
      },
      fontSize: {
        // '3xxl': ['32px', '48px'],
        // '4xxl': ['42px', '63px'],
        // '6xxl': ['64px', '96px']
      },
      fontFamily: {
        'azeret': '"Azeret Mono" , monospace',
        'noto': '"Noto Sans TC" , sans-serif',
      },
      dropShadow: {
        // 'card-shadow': '0px 2px 6px rgba(0, 0, 0, 0.29)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}