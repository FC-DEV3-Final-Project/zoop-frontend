"use client";

import Image from "next/image";

import HamburgerIcon from "../../public/icons/list.svg";
import ArrowLeftIcon from "../../public/icons/arrow-left.svg";
import CloseIcon from "../../public/icons/x.svg";
import AlarmIcon from "../../public/icons/alram.svg";

type HeaderProps = {
  title: string;
  onPrevClick?: () => void;
  onHamburgerClick?: () => void;
  onCloseClick?: () => void;
  onAlarmClick?: () => void;
  bgColorClassName?: string;
};

const Header = ({
  title,
  onPrevClick,
  onHamburgerClick,
  onCloseClick,
  onAlarmClick,
  bgColorClassName = "bg-white",
}: HeaderProps) => {
  return (
    <div
      className={`fixed top-0 z-10 flex h-16 w-full max-w-[600px] items-center justify-between px-5 ${bgColorClassName}`}
    >
      {/* 왼쪽: 뒤로가기 or 햄버거 */}
      <div>
        {onPrevClick || !onHamburgerClick ? (
          <button onClick={onPrevClick} className="flex justify-center">
            <Image src={ArrowLeftIcon} alt="뒤로가기" width={24} height={24} />
          </button>
        ) : onHamburgerClick ? (
          <button onClick={onHamburgerClick} className="flex justify-center">
            <Image src={HamburgerIcon} alt="메뉴" width={24} height={24} />
          </button>
        ) : (
          <div className="w-6" />
        )}
      </div>

      {/* 가운데: 타이틀 */}
      <h1 className="absolute left-1/2 -translate-x-1/2 text-subtitle2">{title}</h1>

      {/* 오른쪽: 닫기 or 알람 */}
      <div>
        {onCloseClick ? (
          <button onClick={onCloseClick} className="flex justify-center">
            <Image src={CloseIcon} alt="닫기" width={24} height={24} />
          </button>
        ) : onAlarmClick ? (
          <button onClick={onAlarmClick} className="flex justify-center">
            <Image src={AlarmIcon} alt="알람" width={24} height={24} />
          </button>
        ) : (
          <div className="w-6" />
        )}
      </div>
    </div>
  );
};

export default Header;
