'use client';

import React, { useState } from 'react';
import { Element } from 'react-scroll';
import clsx from 'clsx';

function HomeHowto() {
  const [isOpenDetail, setOpenDetail] = useState(false);

  const onClickButton = () => {
    setOpenDetail((prev) => !prev);
  };

  return (
    <Element name="howto">
      <div className="flex items-center justify-center px-[12px] py-[60px] sm:px-0 sm:py-[100px]">
        <div className="w-full sm:w-[1400px]">
          {/* <p className="text-center text-[24px] font-extrabold text-[#333] sm:text-[36px]">
           청주공항 365 주차대행
           </p> */}
          <p className="mb-[40px] text-center text-[24px] font-extrabold text-primary sm:text-[36px]">
            주차 대행{' '}
            <span className="bg-gradient-to-t from-blue-100 from-40% to-transparent to-40%">
              이용 방법
            </span>
          </p>
          <div className="mx-auto sm:w-[1024px]">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex-1 overflow-hidden rounded-lg border">
                <div className="flex items-center justify-center bg-primary p-3 text-lg font-semibold text-white sm:p-5 sm:text-xl">
                  차량을 맡기실 경우
                </div>
                <div className="flex flex-col gap-3 p-5 sm:gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-primary font-semibold text-white sm:w-10">
                        01
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        예약신청
                      </div>
                    </div>
                    <p>
                      홈페이지 또는 전화로 예약하시면 됩니다(당일예약 별도 문의)
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-primary font-semibold text-white sm:w-10">
                        02
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        도착 예정 전화
                      </div>
                    </div>
                    <p>
                      이용 당일 도착 20분 전일 통화한 배정된 기사님에게 전화
                      부탁드립니다.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-primary font-semibold text-white sm:w-10">
                        03
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        인계 장소 도착
                      </div>
                    </div>
                    <p>차량 접수 후 보관증 발급, 차량 상태 및 주행기록 점검</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-primary font-semibold text-white sm:w-10">
                        04
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        완료
                      </div>
                    </div>
                    <p>차량 접수 완료가 되었습니다. 즐거운 여행 되세요.</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden rounded-lg border">
                <div className="flex items-center justify-center bg-gray-500 p-3 text-lg font-semibold text-white sm:p-5 sm:text-xl">
                  차량을 찾으실 경우
                </div>
                <div className="flex flex-col gap-3 p-5 sm:gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-gray-500 font-semibold text-white sm:w-10">
                        01
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        입국 비행기 도착
                      </div>
                    </div>
                    <p>
                      입국 비행기 도착 시 수하물 찾기 전 사전 연락 받으신
                      기사님에게 연락주시기 바랍니다.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-gray-500 font-semibold text-white sm:w-10">
                        02
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        출고 요청
                      </div>
                    </div>
                    <p>차량 출고 요청 및 출고 준비 후 출발합니다.</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-gray-500 font-semibold text-white sm:w-10">
                        03
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        대기
                      </div>
                    </div>
                    <p>인도 장소에 대기를 해주시면 됩니다.</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-gray-500 font-semibold text-white sm:w-10">
                        04
                      </div>
                      <div className="text-lg font-semibold sm:text-xl">
                        차량 확인
                      </div>
                    </div>
                    <p>고객님의 차량을 확인하시고 차량을 인계 받으세요.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-5 sm:mt-[40px] sm:flex-row">
              <div
                className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-500 bg-gray-100 p-3 text-lg font-semibold text-gray-500 sm:w-[150px] sm:cursor-default sm:p-5 sm:text-xl"
                onClick={onClickButton}
              >
                유의사항
              </div>
              <div
                className={clsx(
                  'hidden w-full rounded-lg border p-5 sm:block',
                  isOpenDetail ? '!block sm:!block' : '!hidden sm:!block',
                )}
              >
                <ul className="ml-5 list-disc">
                  <li>사전에 예약하셔야 원활한 서비스가 진행됩니다.</li>
                  <li>예약을 못하셨을 경우 전화를 꼭 주세요.</li>
                  <li>
                    일정 변동 시 반드시 사전에 미리 고객센터로 연락해 주세요.
                  </li>
                  <li>
                    미연락으로 인해 불편함을 겪으시는 일이 없도록 협조 부탁
                    드립니다.
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

export default HomeHowto;
