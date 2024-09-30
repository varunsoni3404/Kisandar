/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#A8890E',
        primary2: '#F3F3F3',
        primary3: '#6B8E23',
        customGreen: '#a6b3a4', 
        primary:"#F5385D"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #bfc8bc 10%, #ffffff 100%)',
        'custom-bg-image': "url('/Rectangle-116.png')",
      },
    },
  },
  plugins: [],
}
