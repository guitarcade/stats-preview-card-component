/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-2': 'hsl(244, 38%, 16%)',
      'primary-3': 'hsl(277, 64%, 61%)',
      'primary-4': 'hsl(277, 100%, 50%)',
      'neutral-1': 'hsl(0, 0%, 100%)',
      'neutral-2': 'hsla(0, 0%, 100%, 0.75)',
      'neutral-3': 'hsla(0, 0%, 100%, 0.6)',
    }
  },
  plugins: [],
}
