'use client';

import React, { useState } from 'react';
import { Element } from 'react-scroll';
import clsx from 'clsx';

function HomePriceInfo() {
  const [isOpenDetail, setOpenDetail] = useState(false);

  const onClickButton = () => {
    setOpenDetail((prev) => !prev);
  };

  return (
    <Element name="price">
      <div className="flex items-center justify-center bg-[#f4f7fa] px-[12px] py-[60px] sm:px-0 sm:py-[100px]">
        <div className="w-full sm:w-[1400px]">
          {/* <p className="text-center text-[24px] font-extrabold text-[#333] sm:text-[36px]">
        청주공항 365 주차대행
        </p> */}
          <p className="mb-[40px] text-center text-[24px] font-extrabold text-primary sm:text-[36px]">
            주차 대행{' '}
            <span className="bg-gradient-to-t from-blue-100 from-40% to-transparent to-40%">
              요금 안내
            </span>
          </p>
          <div className="mx-auto sm:w-[1024px]">
            <div className="mb-5 flex flex-col overflow-hidden rounded-lg border sm:mb-10">
              <div className="grid grid-cols-3 border-b bg-primary text-base font-semibold text-white sm:text-xl">
                <div className="flex items-center justify-center p-2 text-center sm:p-5">
                  구분
                </div>
                <div className="flex items-center justify-center p-2 text-center sm:p-5">
                  정상가
                </div>
                <div className="flex items-center justify-center p-2 text-center sm:p-5">
                  할인가
                </div>
              </div>
              <div className="grid grid-cols-3 border-b bg-white text-base font-semibold sm:text-lg">
                <div className="flex items-center justify-center border-r p-2 text-center sm:p-5">
                  평일 / 주말
                </div>
                <div className="flex items-center justify-center whitespace-nowrap border-r p-2 text-center line-through sm:p-5">
                  1일 / 10,000원
                </div>
                <div className="flex items-center justify-center p-2 text-center text-red-500 sm:p-5">
                  1일 / 5,000원
                </div>
              </div>
              <div className="grid grid-cols-3 bg-white text-base font-semibold sm:text-lg">
                <div className="flex items-center justify-center border-r p-2 text-center sm:p-5">
                  주차대행료
                </div>
                <div className="col-span-2 flex items-center justify-center p-2 text-center text-red-500 sm:p-5">
                  10,000원
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div
                className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-primary bg-primary/10 p-3 text-lg font-semibold text-primary sm:w-[150px] sm:cursor-default sm:p-5 sm:text-xl"
                onClick={onClickButton}
              >
                안내사항
              </div>
              <div
                className={clsx(
                  'hidden w-full rounded-lg border bg-white p-5 sm:block',
                  isOpenDetail ? '!block sm:!block' : '!hidden sm:!block',
                )}
              >
                <ul className="ml-5 list-disc">
                  <li>당일예약가능</li>
                  <li>1일 10,000원 → 1일 5,000원 (50% 할인)</li>
                  <li className="font-semibold text-primary">
                    주차대행료 10,000원은 별도 청구합니다. (이벤트에 따라 변동
                    가능)
                  </li>
                  <li>
                    결제는 차량 찾으실때 후불 결제입니다. (카드결제시 VAT별도)
                  </li>
                  <li>
                    차량입고 후 유실물, 일정취소 등으로 퇴차 요청 시 퇴차비
                    발생합니다.
                    <br />
                    (입고중 단순퇴차 : 5,000원 / 입고 후 취소 및 퇴차 :
                    10,000원)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default HomePriceInfo;
