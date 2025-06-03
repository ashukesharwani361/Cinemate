export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        other: { "min": '340px', "max": '1200px' }
      },
      colors: {
        darkbg: "#1E293B",
        blue: {
          850: "#dc2626"
        }
      }
    },
  },
  plugins: [],
}