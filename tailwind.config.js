/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        desaturatedDarkBlue: 'hsl(214, 17%, 51%)',
        grayishBlue: 'hsl(212, 23%, 69%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif'],
      },
      spacing: {
        '67': '67px',
        '72': '72px',
        '200': '200px',
        '248': '248px',
        '280': '280px',
        '285': '285px',
        '327': '327px',
        '445': '445px',
        '730': '730px',
      },
      fontSize: {
        '13': '13px',
      },
      letterSpacing: {
        normal: '.0.12px',
        wide: '.0.2px',
        wider: '0.25px',
        widest: '5px',
      },
    },
  },
  plugins: [],
}

