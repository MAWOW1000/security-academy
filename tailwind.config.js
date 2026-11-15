/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Be Vietnam Pro', 'sans-serif'],
        body: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg0: '#0a0f1e', bg1: '#0f162c', panel: '#141d33', panel2: '#1a2440',
        edge: 'rgba(148,163,184,0.18)', ink: '#eef2f9', dim: '#9aa9c2', dim2: '#6b7a93',
        brand: '#38bdf8', brand2: '#818cf8',
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
};
