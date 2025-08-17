import Link from 'next/link';
import { PiAirplaneInFlightFill } from 'react-icons/pi';

export default function HeaderLogo() {
  return (
    <Link href="/" className="btn btn-ghost gap-2 px-2 sm:px-4">
      <div className="text-primary [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.2)]">
        <PiAirplaneInFlightFill className="h-[40px] w-[40px]" />
      </div>
      <div className="flex flex-col items-start">
        <div className="text-xl font-extrabold">청주공항 365 안심 주차대행</div>
        <div className="text-gray-500">365일 24시간 연중무휴</div>
      </div>
      {/* <div className="text-xl font-extrabold sm:text-2xl">
        청주공항렌트카119
      </div> */}
    </Link>
  );
}
