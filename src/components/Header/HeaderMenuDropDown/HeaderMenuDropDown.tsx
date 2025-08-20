import { FiMenu } from 'react-icons/fi';
import { animateScroll } from 'react-scroll';

type Props = {
  onScrollTo: (name: string) => void;
};

export default function HeaderMenuDropDown({ onScrollTo }: Props) {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost px-2 sm:px-4 lg:hidden"
      >
        <FiMenu className="h-8 w-8" />
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm right-0 z-20 mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
      >
        <li className="text-xs sm:text-sm">
          <a
            className="cursor-pointer"
            href="https://itcha.co.kr/reserve/365"
            target="_blank"
          >
            예약하기
          </a>
        </li>
        <li className="text-xs sm:text-sm">
          <a
            className="cursor-pointer"
            href="https://itcha.co.kr/reserve/365/list"
            target="_blank"
          >
            예약확인
          </a>
        </li>
        <li className="text-xs sm:text-sm">
          <a className="cursor-pointer" onClick={() => onScrollTo('price')}>
            요금안내
          </a>
        </li>
        <li className="text-xs sm:text-sm">
          <a className="cursor-pointer" onClick={() => onScrollTo('howto')}>
            이용방법
          </a>
        </li>
      </ul>
    </div>
  );
}
