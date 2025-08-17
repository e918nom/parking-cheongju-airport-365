'use client';

import { PiAirplaneInFlightFill } from 'react-icons/pi';
import Typist from 'react-typist-component';
import clsx from 'clsx';

export default function HomeMain() {
  return (
    <div className="relative flex justify-center bg-[url('/images/home/airport-mo.png')] bg-cover bg-[position:80%_50%] sm:bg-airport sm:bg-center">
      <div className="absolute h-full w-full bg-[rgba(0,0,0,0.3)]" />
      <div className="min-h-auto z-10 mx-3 flex h-[600px] w-full items-center justify-center sm:h-auto sm:min-h-[780px] sm:w-[1024px]">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center text-center text-[40px] font-extrabold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.6)] sm:text-6xl">
            <PiAirplaneInFlightFill className="h-[60px] w-[60px] text-primary sm:h-[100px] sm:w-[100px]" />
            <div className="leading-[1.2]">
              청주공항
              <br />
              365 안심 주차대행
            </div>
          </div>
          <div className="mb-7 text-center text-2xl font-extrabold text-[#00FFDE] [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.6)] sm:mb-14 sm:text-4xl">
            PARKING SERVICE
          </div>
          <div className="text-center text-xl font-medium !leading-[1.6] text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.6)] sm:text-3xl">
            청주공항 <b className="text-[#00FFDE]">최단거리 최저가 요금</b>
            <br />
            고객님의 여행을 365주차대행이 책임지겠습니다.
          </div>
        </div>
        <div className="absolute bottom-[30px] z-30 flex h-[40px] w-[40px] animate-bounce items-center justify-center">
          <img src="/images/home/scroll.png" alt="마우스스크롤" />
        </div>
      </div>
    </div>
  );
}
