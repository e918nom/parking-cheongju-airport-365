'use client';

type Props = {
  onScrollTo: (name: string) => void;
};

export default function HeaderMenu({ onScrollTo }: Props) {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li>
          <a
            href="https://itcha.co.kr/reserve/365"
            target="_blank"
            className="btn btn-ghost text-[16px] font-bold"
          >
            예약하기
          </a>
        </li>
        <li>
          <a
            href="https://itcha.co.kr/reserve/365/list"
            target="_blank"
            className="btn btn-ghost text-[16px] font-bold"
          >
            예약확인
          </a>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('price')}
            className="btn btn-ghost text-[16px] font-bold"
          >
            요금안내
          </div>
        </li>
        <li>
          <div
            onClick={() => onScrollTo('howto')}
            className="btn btn-ghost text-[16px] font-bold"
          >
            이용방법
          </div>
        </li>
      </ul>
    </div>
  );
}
