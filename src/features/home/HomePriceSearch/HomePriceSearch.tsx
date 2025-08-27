'use client';

import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { IoAirplane } from 'react-icons/io5';
import { Element } from 'react-scroll';
import clsx from 'clsx';
import { ko } from 'date-fns/locale';

import 'react-day-picker/dist/style.css';

export default function HomePriceSearch() {
  const [isOpenDatePicker1, setIsOpenDatePicker1] = useState(false);
  const [isOpenDatePicker2, setIsOpenDatePicker2] = useState(false);

  const [dateOut, setDateOut] = useState<Date>();
  const [dateIn, setDateIn] = useState<Date>();

  // 요금 계산
  const days =
    dateOut && dateIn
      ? Math.max(
          1,
          Math.ceil(
            (dateIn.getTime() - dateOut.getTime()) / (1000 * 60 * 60 * 24),
          ) + 1,
        )
      : 0;

  const totalPrice = days * 7000;

  return (
    <Element name="search">
      <div className="flex items-center justify-center bg-[#f4f7fa] px-[12px] py-[60px] sm:min-h-dvh sm:px-0 sm:py-[100px]">
        <div className="w-full sm:w-[1400px]">
          <p className="mb-[40px] text-center text-[24px] font-extrabold sm:mb-[80px] sm:text-[44px]">
            <span className="bg-gradient-to-t from-blue-100 from-40% to-transparent to-40%">
              주차 요금 확인하기
            </span>
          </p>
          <div className="mx-auto sm:w-[1024px]">
            <div className="mb-5 rounded-lg border bg-white sm:mb-10">
              <div className="flex flex-col items-start justify-between border-b p-5 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div className="mb-3 flex items-center sm:mb-0">
                  <IoAirplane className="mr-3 h-5 w-5" />
                  <p className="text-lg font-extrabold">출국</p>
                </div>
                <div className="flex w-full flex-col gap-2 sm:w-1/2 sm:flex-row">
                  <div className="relative sm:w-1/2">
                    <button
                      onClick={() => setIsOpenDatePicker1((prev) => !prev)}
                      className="input input-bordered w-full text-left"
                    >
                      {dateOut ? dateOut.toLocaleDateString() : '날짜 선택'}
                    </button>

                    {isOpenDatePicker1 && (
                      <div className="absolute top-full z-50 mt-2 rounded-lg border bg-white px-4 py-2 shadow-lg">
                        <DayPicker
                          mode="single"
                          locale={ko}
                          selected={dateOut}
                          onSelect={(date) => {
                            setDateOut(date);
                            setIsOpenDatePicker1(false);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <select
                    defaultValue="00시"
                    className="select input-bordered w-full sm:w-1/2"
                  >
                    <option>00시</option>
                    <option>01시</option>
                    <option>02시</option>
                    <option>03시</option>
                    <option>04시</option>
                    <option>05시</option>
                    <option>06시</option>
                    <option>07시</option>
                    <option>08시</option>
                    <option>09시</option>
                    <option>10시</option>
                    <option>11시</option>
                    <option>12시</option>
                    <option>13시</option>
                    <option>14시</option>
                    <option>15시</option>
                    <option>16시</option>
                    <option>17시</option>
                    <option>18시</option>
                    <option>19시</option>
                    <option>20시</option>
                    <option>21시</option>
                    <option>22시</option>
                    <option>23시</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between border-b p-5 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div className="mb-3 flex items-center sm:mb-0">
                  <IoAirplane className="mr-3 h-5 w-5 rotate-180" />
                  <p className="text-lg font-extrabold">입국</p>
                </div>
                <div className="flex w-full flex-col gap-2 sm:w-1/2 sm:flex-row">
                  <div className="relative sm:w-1/2">
                    <button
                      onClick={() => setIsOpenDatePicker2((prev) => !prev)}
                      className="input input-bordered w-full text-left"
                    >
                      {dateIn ? dateIn.toLocaleDateString() : '날짜 선택'}
                    </button>

                    {isOpenDatePicker2 && (
                      <div className="absolute top-full z-50 mt-2 rounded-lg border bg-white px-4 py-2 shadow-lg">
                        <DayPicker
                          mode="single"
                          locale={ko}
                          selected={dateIn}
                          onSelect={(date) => {
                            setDateIn(date);
                            setIsOpenDatePicker2(false);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <select
                    defaultValue="00시"
                    className="select input-bordered w-full sm:w-1/2"
                  >
                    <option>00시</option>
                    <option>01시</option>
                    <option>02시</option>
                    <option>03시</option>
                    <option>04시</option>
                    <option>05시</option>
                    <option>06시</option>
                    <option>07시</option>
                    <option>08시</option>
                    <option>09시</option>
                    <option>10시</option>
                    <option>11시</option>
                    <option>12시</option>
                    <option>13시</option>
                    <option>14시</option>
                    <option>15시</option>
                    <option>16시</option>
                    <option>17시</option>
                    <option>18시</option>
                    <option>19시</option>
                    <option>20시</option>
                    <option>21시</option>
                    <option>22시</option>
                    <option>23시</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-1 justify-between p-5 text-lg font-extrabold sm:px-8 sm:py-5">
                  <div>이용요금</div>
                  <div className="text-gray-500">
                    <b>{days}</b>일 /{' '}
                    <b className="text-red-500">
                      {totalPrice.toLocaleString()}
                    </b>
                    원
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://itcha.co.kr/reserve/365"
                  className="flex h-[60px] cursor-pointer items-center justify-center rounded-bl-lg rounded-br-lg bg-primary text-lg font-extrabold text-white sm:h-auto sm:w-[200px] sm:rounded-bl-none"
                >
                  예약하기
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-primary bg-primary/10 p-3 text-lg font-semibold text-primary sm:w-[150px] sm:cursor-default sm:p-5 sm:text-xl">
                안내사항
              </div>
              <div className={clsx('w-full rounded-lg border bg-white p-5')}>
                <ul className="ml-5 list-disc">
                  <li>당일 예약 가능합니다.</li>
                  <li>
                    주차대행료 10,000원은 별도 청구됩니다. (이벤트에 따라
                    변동가능)
                  </li>
                  <li>
                    결제는 차량 찾으실 때 후불 결제입니다. (카드 결제시 VAT
                    별도)
                  </li>
                  <li>
                    차량 입고 후 유실물, 일정 취소 등으로 회차 요청시 회차비가
                    발생합니다.
                    <br />
                    [입고 중 단순회차(유실물 등) : 7,000원 / 입고 취소 회차 :
                    10,000원]
                  </li>
                  <li>장기 주차 이용 시 별도 문의 바랍니다. [1844-1477]</li>
                </ul>
              </div>
            </div>
            {/* <div className="mt-[40px] flex flex-col gap-3 text-gray-600 sm:flex-row sm:gap-8">
              <div className="font-medium">안내사항</div>
              <ul className="list-disc">
                <li>당일 예약 가능합니다.</li>
                <li>
                  주차대행료 10,000원은 별도 청구됩니다. (이벤트에 따라
                  변동가능)
                </li>
                <li>
                  결제는 차량 찾으실 때 후불 결제입니다. (카드 결제시 VAT 별도)
                </li>
                <li>
                  차량 입고 후 유실물, 일정 취소 등으로 회차 요청시 회차비가
                  발생합니다.
                  <br />
                  [입고 중 단순회차(유실물 등) : 7,000원 / 입고 취소 회차 :
                  10,000원]
                </li>
                <li>장기 주차 이용 시 별도 문의 바랍니다. [1844-1477]</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </Element>
  );
}
