/** @type {import('tailwindcss').Config} */

// theme docs:
// https://tailwindcss.com/docs/theme#customizing-the-default-theme

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxs': '0px',
      // iphone X
      'xs': '414px',
      // tablet
      'sm': '640px',
      'md': '768px',
      // laptop and wider
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      // general
      black: '#000',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      graydark: '#273444',
      gray: '#8492a6',
      graylight: '#d3dce6',
      white: '#fff',
      // fall colors
      dark: '#202020'
    },
    fontFamily: {
      nav: ['Cormorant']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      backgroundImage: {
        'hero': "url('/charcoal-wood.jpeg')",
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
  // important: true,
};
