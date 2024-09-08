import type { Config } from 'tailwindcss'
import * as defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cardBg: "rgba(107, 125, 222, 0.24)",
      },
      boxShadow: {
        blue: "0px 24px 48px 0px rgba(23, 43, 151, 0.72)"
      },
      backgroundImage: {
        blueGradient: "linear-gradient(180deg, rgba(107, 125, 222, 0.12) 0%, #2921A5 100%)",
        blueCardGradient: "linear-gradient(180deg, #6377E1 0%, #2920A5 100%)",
      }
    },
  },
  plugins: [],
} satisfies Config