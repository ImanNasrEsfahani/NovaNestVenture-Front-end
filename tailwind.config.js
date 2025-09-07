/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: process.env.NODE_ENV === 'development' ? [{ pattern: /.*/ }] : [],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'IranYekan'],
        condensed: ['Markazi'],
        text: ['IranYekan', 'Barlow'],
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