/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        robotoSlab: ["Roboto Slab", "serif"],
        sansita: ["Sansita", "serif"],
        monster: ["Montserrat", "serif"],
      },
      colors: {
        primary1: '#A8890E',
        primary2: '#F3F3F3',
        primary3: '#6B8E23',
        customGreen: '#a6b3a4', 
        primary:"#F5385D",
        scrollbg:"#D9D9D9"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #BCC5B9 30%, #f5f5f5 40%)',
        'custom-bg-image': "url('/Rectangle-116.png')",
      },
    },
  },
  plugins: [],
}
