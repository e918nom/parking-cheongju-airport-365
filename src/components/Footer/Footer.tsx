import React from 'react';

import HeaderLogo from '@/components/Header/HeaderLogo';

import { env } from '@/env';

function Footer() {
  return (
    <footer className="m-auto w-full py-[40px] pb-12 sm:w-[1024px]">
      <div className="flex flex-col items-start gap-5">
        <HeaderLogo />
        <div className="flex flex-col gap-1 pl-3 text-sm text-gray-500 sm:pl-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <div>상호 | {env.NEXT_PUBLIC_COMPANY_NAME}</div>
            <div>사업자번호 | {env.NEXT_PUBLIC_COMPANY_NUMBER}</div>
            <div>대표 | {env.NEXT_PUBLIC_COMPANY_CEO}</div>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <div>대표번호 | {env.NEXT_PUBLIC_TEL}</div>
            <div>휴대폰번호 | {env.NEXT_PUBLIC_COMPANY_TEL}</div>
            <div>주소 | {env.NEXT_PUBLIC_COMPANY_ADDRESS}</div>
          </div>
        </div>
      </div>
      <p className="mb-10 mt-5 pl-3 text-sm text-gray-500 sm:pl-5">
        &copy; 2025 {env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
