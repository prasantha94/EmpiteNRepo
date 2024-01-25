/** @type {import('tailwindcss').Config} */

const colorVariants = {
 darkGray:"#717171",
 normalGray:"#DEDEDE",
 darkBlack:"#1F1E22",
 lightAsh:"#EDEDED",
 lightGray: "#F7F7F7",
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ['var(--font-Mooli)'],
        mulish: ['var(--font-mulish)'],
        playfairDisplay: ['var(--font-playfairDisplay)'],
        spaceGrotesk: ['var(font-spaceGrotesk)']
      },
      colors: {
        ...colorVariants
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      borderRadius: {
        'sm+': '5px',
      },
    },
  },
  plugins: [],
};