"use client";

import Image from "next/image";

import HamburgerIcon from "../../public/icons/list.svg";
import ArrowLeftIcon from "../../public/icons/arrow-left.svg";
import CloseIcon from "../../public/icons/x.svg";
import AlarmIcon from "../../public/icons/alram.svg";

type HeaderRootProps = {
  children: React.ReactNode;
  bgColorClassName?: string;
  size?: "sm" | "md";
};

const Root = ({ children, bgColorClassName = "bg-white", size = "sm" }: HeaderRootProps) => {
  return (
    <div
      className={`fixed top-0 z-10 flex w-full max-w-[600px] items-center justify-between px-5 ${bgColorClassName} ${size === "sm" ? "h-12" : "h-16"}`}
    >
      {children}
    </div>
  );
};

const Prev = ({
  onPrevClick,
  className = "",
}: {
  onPrevClick?: () => void;
  className?: string;
}) => (
  <button onClick={onPrevClick} className={`flex justify-center ${className}`}>
    <Image src={ArrowLeftIcon} alt="뒤로가기" width={24} height={24} />
  </button>
);

const Hamburger = ({ onHamburgerClick }: { onHamburgerClick?: () => void }) => (
  <div onClick={onHamburgerClick} className="flex justify-center cursor-pointer">
    <Image src={HamburgerIcon} alt="메뉴" width={24} height={24} />
  </div>
);

const Title = ({ children, className = "" }: { children: string; className?: string }) => (
  <h1
    className={`absolute left-1/2 w-[70%] -translate-x-1/2 truncate whitespace-nowrap text-center text-subtitle2 ${className}`}
  >
    {children}
  </h1>
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
