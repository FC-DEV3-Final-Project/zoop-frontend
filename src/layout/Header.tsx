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

const Prev = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className="flex justify-center">
    <Image src={ArrowLeftIcon} alt="뒤로가기" width={24} height={24} />
  </button>
);

const Hamburger = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className="flex justify-center">
    <Image src={HamburgerIcon} alt="메뉴" width={24} height={24} />
  </button>
);

const Title = ({ children }: { children: string }) => (
  <h1 className="absolute left-1/2 -translate-x-1/2 text-subtitle2">{children}</h1>
);

const Close = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className="flex justify-center">
    <Image src={CloseIcon} alt="닫기" width={24} height={24} />
  </button>
);

const Alarm = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className="flex justify-center">
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
