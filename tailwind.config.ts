import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sen: ['var(--font-sen)'],
        pretendard: ['var(--font-pretendard)'],
        nanumPenScript: ['var(--font-nanum-pen-script)'],
        keaniaOne: ['var(--font-keania-one)'],
      },
      backgroundImage: {
        airport: "url('/images/home/airport.jpg')",
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#3a8dfd',
          secondary: '#C7CCD3',
          warning: '#FEE500',
          success: '#2DB400',
        },
      },
    ],
  },
} satisfies Config;
