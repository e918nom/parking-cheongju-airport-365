'use client';

import Image from 'next/image';
import React from 'react';
import { Element } from 'react-scroll';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function HomeBookingList() {
  const allBookings = [
    {
      status: '예약신청',
      date: dayjs().format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약신청',
      date: dayjs().format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약신청',
      date: dayjs().format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(3, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(3, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(3, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(4, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
    {
      status: '예약완료',
      date: dayjs().subtract(4, 'day').format('YYYY-MM-DD'),
      content: '문의합니다.',
    },
  ];

  const allCarImages = [
    { id: 1, imagePath: '/images/car/car1.png' },
    { id: 2, imagePath: '/images/car/car2.png' },
    { id: 3, imagePath: '/images/car/car3.png' },
    { id: 4, imagePath: '/images/car/car4.png' },
    { id: 5, imagePath: '/images/car/car5.png' },
  ];

  return (
    <Element name="list">
      <div className="flex items-center justify-center px-[12px] py-[60px] sm:min-h-dvh sm:px-0 sm:py-[100px]">
        <div className="w-full sm:w-[1400px]">
          <div className="mx-auto grid gap-20 overflow-hidden sm:w-[1024px] sm:grid-cols-2 sm:gap-5">
            <div>
              <p className="mb-[40px] text-center text-[24px] font-extrabold text-primary sm:text-[36px]">
                차량{' '}
                <span className="bg-gradient-to-t from-blue-100 from-40% to-transparent to-40%">
                  예약 현황
                </span>
              </p>
              <div className="pointer-events-none h-[500px] rounded-lg border sm:h-[600px]">
                <Swiper
                  direction="vertical"
                  effect="slide"
                  cssMode={false}
                  slidesPerView={10}
                  spaceBetween={10}
                  breakpoints={{
                    640: {
                      spaceBetween: 10,
                      slidesPerView: 10,
                    },
                    320: {
                      spaceBetween: 5,
                      slidesPerView: 10,
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  modules={[Autoplay]}
                  allowTouchMove={false}
                  className="h-full"
                >
                  {allBookings.map((booking, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex h-full items-center gap-2 px-5 text-base sm:gap-5 sm:text-lg">
                        <div
                          className={clsx(
                            'rounded-full px-3 py-1 text-sm sm:px-4 sm:text-base',
                            booking.status === '예약신청'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700',
                          )}
                        >
                          {booking.status}
                        </div>
                        <div>{booking.date}</div>
                        <div>{booking.content}</div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div>
              <p className="mb-[40px] text-center text-[24px] font-extrabold text-primary sm:text-[36px]">
                주차 완료{' '}
                <span className="bg-gradient-to-t from-blue-100 from-40% to-transparent to-40%">
                  사진 인증
                </span>
              </p>
              <div className="pointer-events-none mx-auto h-[300px] w-[360px] rounded-lg sm:h-[600px] sm:w-full">
                <Swiper
                  direction="vertical"
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  modules={[Autoplay]}
                  allowTouchMove={false}
                  className="h-full"
                  breakpoints={{
                    640: {
                      direction: 'vertical',
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    320: {
                      direction: 'horizontal',
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {allCarImages.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div
                        className="flex h-full w-full items-center justify-center border bg-cover"
                        style={{
                          backgroundImage: `url(${image.imagePath})`,
                          backgroundPosition: '50% 82%',
                        }}
                      >
                        {/* <img src={image.imagePath} alt="주차이미지" /> */}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
