/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: process.env.NODE_ENV === 'development' ? [{ pattern: /.*/ }] : [],
  theme: {
    extend: {
      fontSize: {
        'base': '1.1875rem', // 19px
        'sm': '1.125rem',    // 18px
        'lg': '1.3125rem',  // 21px
        'xl': '1.4375rem'   // 23px
      },
      fontFamily: {
        barlow: ['Barlow', 'IranYekan'],
        condensed: ['Markazi'],
        sans: ['IranYekan', 'Barlow'],
        header: ['Gilda Display', 'Markazi']
      },
      colors: {
        primary: '#AA8453',
        whiteGold: '#F8F5F0',
        tableHeader: '#DDCEBA',
        blue: '#35427D',
        grayCheckBox: '#939393',
        grayLabel: "#636260",
        grayDark: "#222222B2"
      },
      fontSize: {
        'base': '19px',
        'sm': '17px',
        'lg': '21px',
        'xl': '23px'
      },
      maxWidth: {
        'responsive': 'clamp(320px, 95vw, 1920px)',
        // Mobile breakpoints
        'container-xs': '384px',    // small phones (320-480px)
        'container-sm': '512px',    // large phones (480-640px)
        // Tablet breakpoints  
        'container-md': '672px',    // small tablets (640-768px)
        'container-lg': '896px',    // large tablets (768-1024px)
        // Desktop breakpoints
        'container-xl': '1152px',   // small desktop (1024-1280px)
        'container-2xl': '1400px',  // medium desktop (1280-1536px)
        'container-3xl': '1600px',  // large desktop (1536-1792px)
        'container-4xl': '1800px',  // extra large desktop (1792px+)
        'container-max': '1920px',  // full HD screens
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // dark theme is disabled now. to enable it set darkTheme as: dark.
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: true, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};