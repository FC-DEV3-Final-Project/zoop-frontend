import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import Input from "../ui/input";

import NewChatIcon from "../../../public/icons/new-chat.svg";
import LogoIcon from "../../../public/icons/logo.svg";

import SideBarItem from "./SideBarItem";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

interface SideBarProps {
  onClose?: () => void;
}

const SideBar = ({ onClose }: SideBarProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState("chat-1");

  const { user } = useUserInfoStore();

  const handelNewChat = () => {
    alert("새로운 대화 시작하기");

    // TODO : 채팅방 생성 API
  };

  const handleItemClick = (chatId: string) => {
    setSelectedChatId(chatId);
    onClose?.(); // 아이템 클릭 시 사이드바 닫기

    // TODO: 채팅 불러오기 API
  };

  return (
    <SheetContent side="left" isFullWidth={isFocused} onOpenAutoFocus={(e) => e.preventDefault()}>
      <SheetHeader className="flex w-full flex-col gap-[30px] border-b-[1px] border-gray-300 p-5">
        <SheetTitle className="w-full">
          <div className="flex w-full justify-between gap-2">
            <div className="flex gap-4">
              <Image src={LogoIcon} alt={"logo"} />
              <Input
                className="flex-1"
                placeholder="검색"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onSend={() => {
                  alert("검색");
                }}
                onClear={() => setSearchKeyword("")}
              />
            </div>

            {isFocused && (
              <button
                onClick={() => setIsFocused(false)}
                className="whitespace-nowrap text-subtitle3"
              >
                취소
              </button>
            )}
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
          <SideBarItem
            chatRoomId="chat-1"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-1"}
            onClick={() => handleItemClick("chat-1")}
          />
          <SideBarItem
            chatRoomId="chat-2"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-2"}
            onClick={() => handleItemClick("chat-2")}
          />
          <SideBarItem
            chatRoomId="chat-3"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-3"}
            onClick={() => handleItemClick("chat-3")}
          />
        </li>
        <li>
          <h1 className="px-5 py-[14px] text-caption1 text-gray-800">어제</h1>
          <SideBarItem
            chatRoomId="chat-4"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-4"}
            onClick={() => handleItemClick("chat-4")}
          />
          <SideBarItem
            chatRoomId="chat-5"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-5"}
            onClick={() => handleItemClick("chat-5")}
          />
          <SideBarItem
            chatRoomId="chat-6"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-6"}
            onClick={() => handleItemClick("chat-6")}
          />
        </li>
        <li>
          <h1 className="px-5 py-[14px] text-caption1 text-gray-800">저번주</h1>
          <SideBarItem
            chatRoomId="chat-7"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-7"}
            onClick={() => handleItemClick("chat-7")}
          />
          <SideBarItem
            chatRoomId="chat-8"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-8"}
            onClick={() => handleItemClick("chat-8")}
          />
          <SideBarItem
            chatRoomId="chat-9"
            title={"이수역 / 전세 / 아파트 / 6억"}
            isSelected={selectedChatId === "chat-9"}
            onClick={() => handleItemClick("chat-9")}
          />
        </li>
      </ul>

      <SheetFooter
        className="absolute -bottom-1 left-0 right-0 px-5 py-6"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 44%)",
          paddingTop: "40px",
        }}
      >
        <div className="flex flex-row items-center justify-between py-[10px]">
          <div className="flex items-center gap-2">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt="프로필 이미지"
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <img src="/icons/base-user-img.svg" alt="프로필 이미지" />
            )}
            <span className="text-title3">{user?.nickname}님</span>
          </div>
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
