import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import Input from "../ui/input";

import NewChatIcon from "../../../public/icons/new-chat.svg";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handelNewChat = () => {
    alert("새로운 대화 시작하기");

    // TODO : 채팅방 생성 API
  };

  return (
    <SheetContent side="left" className="gap-0">
      <SheetHeader className="flex flex-col gap-[30px] border-b-[1px] border-gray-300 p-5">
        <SheetTitle>
          <div>
            <Input
              placeholder="검색"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onSend={() => {
                alert("검색");
              }}
            />
          </div>
        </SheetTitle>
        <button
          onClick={handelNewChat}
          className="flex items-center justify-start gap-1 text-title4 text-blue-800-primary"
        >
          새로운 대화 시작하기
          <Image src={NewChatIcon} alt={"새로운 채팅"} width={24} height={24} />
        </button>
      </SheetHeader>

      {/** 테스트를 위한 임시 데이터 */}
      <ul className="flex flex-col gap-6 overflow-auto pb-[100px]">
        <li>
          <h1 className="px-5 py-[14px] text-caption1 text-gray-800">오늘</h1>
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} isSelected={true} />
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
        </li>
        <li>
          <h1 className="px-5 py-[14px] text-caption1 text-gray-800">어제</h1>
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
        </li>
        <li>
          <h1 className="px-5 py-[14px] text-caption1 text-gray-800">저번주</h1>
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
          <SideBarItem title={"이수역 / 전세 / 아파트 / 6억"} />
        </li>
      </ul>

      <SheetFooter
        className="absolute bottom-0 left-0 right-0 px-5 py-6"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 44%)",
          paddingTop: "40px",
        }}
      >
        <div className="flex flex-row items-center justify-between py-[10px]">
          <span>
            {/** 프로필 이미지 자리 */}
            <span className="text-title3">OOO님</span>
          </span>
          <Link
            href={"/mypage"}
            className="w-[76px] rounded-lg border-[1px] border-blue-100 bg-blue-50 py-1 text-center text-caption1 text-blue-800-primary"
          >
            내 프로필
          </Link>
        </div>
      </SheetFooter>
    </SheetContent>
  );
};

export default SideBar;
