/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['poppins', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      container: {
        padding: '1.25rem 3rem',
        width:'100%'
      },
      colors: {
        primary: '#F1561B',
        secondary:'#6164FA',
        black: '#0F0F0F'
      },
      screens: {
        xsm: '370px',
      },
    },
  },
  plugins: [],
};

