import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';

import { env } from '@/env';

function HomeBanner() {
  return (
    <div>
      <div className="relative flex h-[440px] items-center justify-center bg-[url('/images/home/footer-bg.jpg')] bg-cover bg-center sm:h-[500px]">
        <div className="absolute left-0 top-0 h-[440px] w-full bg-[rgba(0,0,0,.3)] sm:h-[500px]"></div>
        <div className="z-10 flex flex-col items-center">
          <p className="text-[24px] font-bold text-white sm:text-[36px]">
            <span className="font-keaniaOne">365</span> 안심 주차대행
          </p>
          <p className="mb-4 text-[24px] font-bold text-white sm:text-[36px]">
            빠른상담
          </p>
          <a
            href={`tel:${env.NEXT_PUBLIC_TEL}`}
            className="btn btn-primary flex-1 rounded-xl border-primary bg-primary px-6 py-3 text-xl text-white sm:px-8 sm:py-4 sm:text-[32px]"
          >
            <BsTelephoneFill className="h-5 w-5" />
            <span className="hidden sm:block">{env.NEXT_PUBLIC_TEL}</span>
            <span className="block sm:hidden">전화 문의하기</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
