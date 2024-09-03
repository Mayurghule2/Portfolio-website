/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/src/images/black-3.png')",
      },
    },
  },
  plugins: [],
}

