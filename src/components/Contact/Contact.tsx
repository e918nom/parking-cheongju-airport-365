import { BsTelephoneFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { env } from '@/env';

export default function Contact() {
  return (
    <>
      <div className="fixed bottom-0 z-50 flex w-full">
        <a
          // href={env.NEXT_PUBLIC_KAKAO_OPENCAHT_URL}
          className="text-md btn btn-primary flex-1 rounded-none text-white sm:text-lg"
        >
          <FaCheck className="h-4 w-4 text-white sm:h-7 sm:w-7" />
          실시간 예약하기
        </a>
        <a
          href={`tel:${env.NEXT_PUBLIC_TEL}`}
          className="text-md btn flex-1 rounded-none border-none bg-[#00FFDE] text-black hover:bg-[#00FFDE]/80 sm:text-lg"
        >
          <BsTelephoneFill className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:block">{env.NEXT_PUBLIC_TEL}</span>
          <span className="block sm:hidden">전화 바로연결</span>
        </a>
      </div>
    </>
  );
}
