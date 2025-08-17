'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SiNaver } from 'react-icons/si';
import { scroller } from 'react-scroll';
import clsx from 'clsx';
import useScrollPosition from '@react-hook/window-scroll';

import HeaderMenu from '@/components/Header/HeaderMenu';
import HeaderMenuDropDown from '@/components/Header/HeaderMenuDropDown';

import { env } from '@/env';

import HeaderLogo from './HeaderLogo';

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    setIsSticky(scrollY > headerRef.current?.offsetHeight);
  }, [scrollY]);

  const onScrollTo = (name: string) => {
    scroller.scrollTo(name, {
      offset: headerRef.current ? -headerRef.current.offsetHeight : 0,
    });
  };

  return (
    <header
      ref={headerRef}
      className={clsx(
        'navbar top-0 z-50 justify-between bg-transparent bg-white transition-all duration-300 ease-in-out sm:px-7',
        isSticky && 'sticky bg-opacity-80 shadow-md backdrop-blur',
      )}
    >
      <div className="flex items-center">
        <HeaderLogo />
      </div>
      <div className="sm:gap-16">
        <HeaderMenuDropDown onScrollTo={onScrollTo} />
        <HeaderMenu onScrollTo={onScrollTo} />
      </div>
    </header>
  );
}
