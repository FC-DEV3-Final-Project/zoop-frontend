"use client";

import Image from "next/image";

import HamburgerIcon from "../../public/icons/list.svg";
import ArrowLeftIcon from "../../public/icons/arrow-left.svg";
import CloseIcon from "../../public/icons/x.svg";
import AlarmIcon from "../../public/icons/alram.svg";

type HeaderRootProps = {
  children: React.ReactNode;
  bgColorClassName?: string;
};

const Root = ({ children, bgColorClassName = "bg-white" }: HeaderRootProps) => {
  return (
    <div
      className={`fixed top-0 z-10 flex h-16 w-full max-w-[600px] items-center justify-between px-5 ${bgColorClassName}`}
    >
      {children}
    </div>
  );
};

const Prev = ({ onPrevClick }: { onPrevClick?: () => void }) => (
  <button onClick={onPrevClick} className="flex justify-center">
    <Image src={ArrowLeftIcon} alt="뒤로가기" width={24} height={24} />
  </button>
);

const Hamburger = ({ onHamburgerClick }: { onHamburgerClick?: () => void }) => (
  <div onClick={onHamburgerClick} className="flex justify-center cursor-pointer">
    <Image src={HamburgerIcon} alt="메뉴" width={24} height={24} />
  </div>
);

const Title = ({ children }: { children: string }) => (
  <h1 className="absolute -translate-x-1/2 left-1/2 text-subtitle2">{children}</h1>
);

const Close = ({ onCloseClick }: { onCloseClick?: () => void }) => (
  <button onClick={onCloseClick} className="flex justify-center">
    <Image src={CloseIcon} alt="닫기" width={24} height={24} />
  </button>
);

const Alarm = ({ onAlarmClick }: { onAlarmClick?: () => void }) => (
  <button onClick={onAlarmClick} className="flex justify-center">
    <Image src={AlarmIcon} alt="알람" width={24} height={24} />
  </button>
);

export const Header = Object.assign(Root, {
  Prev,
  Hamburger,
  Title,
  Close,
  Alarm,
});
