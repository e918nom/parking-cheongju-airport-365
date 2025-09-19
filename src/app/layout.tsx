import { type Viewport } from 'next';
import Script from 'next/script';

import { fonts } from '@/app/fonts';

import '@/styles/globals.css';

export async function generateMetadata() {
  return {
    title: '청주공항주차대행 | 공항주차대행 | 청주공항주차',
    description:
      '청주공항 주차대행, 장기 주차대행을 365일 연중무휴 실내 주차 서비스와 함께 합리적인 주차 요금으로 고객님의 부담을 덜어드립니다.',
    icons: [{ rel: 'icon', url: '/favicon.svg' }],
    openGraph: {
      title: '청주공항 365 안심 주차대행',
      description:
        '청주공항 주차대행, 장기 주차대행을 365일 연중무휴 실내 주차 서비스와 함께 합리적인 주차 요금으로 고객님의 부담을 덜어드립니다.',
    },
    keywords: [
      '365주차대행',
      '365주차대행발렛',
      '365주차발렛파킹',
      '청주공항',
      '청주공항365주차대행',
      '청주공항발렛',
      '청주공항발렛파킹',
      '청주공항발랫파킹',
      '청주공항장기주차',
      '청주공항주차',
      '청주공항주차대행',
      '청주공항주차대행가격',
      '청주공항주차대행비용',
      '청주공항주차발렛',
      '청주공항주차발렛예약',
      '청주공항주차발렛요금',
      '청주공항주차비',
      '청주공항주차장',
      '청주공항주차장발렛',
      '청주공항주차장예약',
      '청주공항주차장요금',
      '청주공항주차요금',
      '청주공항주차예약',
      '청주공항공식주차대행',
      '청주국제공항발렛',
      '청주국제공항발렛파킹',
      '청주국제공항365주차대행',
      '청주국제공항장기주차',
      '청주국제공항주차',
      '청주국제공항주차대행',
      '청주국제공항주차대행가격',
      '청주국제공항주차발렛',
      '청주국제공항주차장',
      '청주국제공항주차장발렛',
      '청주국제공항주차장예약',
      '청주국제공항주차장요금',
      '청주국제공항주차요금',
      '청주국제공항주차예약',
      '청주국제공항주차비',
    ],

    // verification: {
    //   other: {
    //     'naver-site-verification': 'ca3b1ace6f85e173cb721e675df3e0d288682e64',
    //   },
    // },
  };
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="ko"
      className={`${fonts.sen.variable} ${fonts.pretendard.variable} ${fonts.keaniaOne.variable}`}
      suppressHydrationWarning
      data-theme="light"
    >
      <body className={`${fonts.sen.className} ${fonts.pretendard.className}`}>
        {children}
        {/* Smartlog */}
        <Script
          id="smartlog-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var hpt_info={'_account':'UHPT-78530', '_server': 'a78'};`,
          }}
        />
        <Script
          src="//cdn.smlog.co.kr/core/smart.js"
          strategy="afterInteractive"
          charSet="utf-8"
        />
        <noscript>
          <img
            src="//a78.smlog.co.kr/smart_bda.php?_account=78530"
            style={{
              display: 'none',
              width: 0,
              height: 0,
            }}
          />
        </noscript>
      </body>
    </html>
  );
}
