import { Keania_One, Sen } from 'next/font/google';
import localFont from 'next/font/local';

const sen = Sen({
  subsets: ['latin'],
  variable: '--font-sen',
});

const keaniaOne = Keania_One({
  subsets: ['latin'],
  variable: '--font-keania-one',
  weight: ['400'],
});
const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',

  variable: '--font-pretendard',
});

export const fonts = {
  sen,
  pretendard,
  keaniaOne,
};
