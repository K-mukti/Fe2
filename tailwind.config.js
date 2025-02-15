/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'], // Menambahkan font DM Sans
        'poppins' : ['Poppins'] // Menambahkan font Poppins
      },
      colors: {
        'primary': '#3ECF4C', // Menambahkan warna primary
        'secondary': '#E2FCD9',
        'form': '#F1F1F1',
      },
      screens: {
        'hp' : '360px', // Responsive untuk HP (referensi samsung galaxy S8+)
      }
    },
  },
  plugins: [],
}


