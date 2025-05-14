/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#176FD4',
        'dark-blue': '#0C3A6E',
        'light-blue': '#C8DCF6',
        'mint-green': '#CDFFE8',
        'cyan': '#BFFFFA',
        'bg-light': '#F8FAFD',
        'background': 'rgb(var(--background) / <alpha-value>)',
        'foreground': 'rgb(var(--foreground) / <alpha-value>)',
      },
      fontFamily: {
        'majer': ['Majer', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 