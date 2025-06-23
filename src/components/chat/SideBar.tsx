import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import Input from "../ui/input";

import NewChatIcon from "../../../public/icons/new-chat.svg";
import LogoIcon from "../../../public/icons/logo.svg";

import SideBarItem from "./SideBarItem";
import { useUserInfoStore } from "@/stores/useUserInfoStore";
import groupChatsByDate from "@/utils/chat/groupChatsByDate";
import { ChatPreviewItem } from "@/types/chat";

interface SideBarProps {
  chatList: ChatPreviewItem[];
  selectedChatId: number | null;
  setSelectedChatId: React.Dispatch<React.SetStateAction<number | null>>;
  onClose?: () => void;
}

const SideBar = ({ chatList, selectedChatId, setSelectedChatId, onClose }: SideBarProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<ChatPreviewItem[]>([]); // API 응답 값 저장할 상태

  // (임시) 검색어 기준 필터링
  const filteredChats = chatList.filter((chat) =>
    chat.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const grouped = groupChatsByDate(
    filteredChats.map((chat) => ({
      ...chat,
      lastMatchingMessage: chat.lastMatchingMessage ?? "",
    })),
  );

  const { user } = useUserInfoStore();

  const handelNewChat = () => {
    setSelectedChatId(null);
    onClose?.();

    // TODO : 채팅 초기화
  };

  const handleItemClick = (chatId: number) => {
    setSelectedChatId(chatId);
    setSearchKeyword(""); // 검색어 초기화
    onClose?.(); // 아이템 클릭 시 사이드바 닫기

    // TODO: 특정 채팅 불러오기 API
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);

    // TODO: 채팅 검색 API
  };

  return (
    <SheetContent
      side="left"
      isFullWidth={isFocused}
      onOpenAutoFocus={(e) => e.preventDefault()}
      className="gap-0"
    >
      <SheetHeader className="flex w-full flex-col gap-[30px] border-b-[1px] border-gray-300 p-5">
        <SheetTitle className="w-full">
          <div className="flex w-full justify-between gap-2">
            <div className="flex gap-4">
              <Image src={LogoIcon} alt={"logo"} />
              <Input
                className="flex-1"
                placeholder="검색"
                value={searchKeyword}
                onChange={handleSearch}
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
          <Image src={NewChatIcon} alt={"새로운 채팅 시작하기"} width={24} height={24} />
        </button>
      </SheetHeader>

      {Object.entries(grouped).length > 0 ? (
        <ul className="flex flex-col gap-6 overflow-auto pb-[100px]">
          {Object.entries(grouped).map(([section, items]) => (
            <li key={section}>
              <h2 className="px-5 py-[14px] text-caption1 text-gray-800">{section}</h2>
              <ul>
                {items.map((chat) => (
                  <SideBarItem
                    key={chat.chatRoomId}
                    chatRoomId={chat.chatRoomId}
                    title={chat.title}
                    content={searchKeyword && (chat.lastMatchingMessage || chat.title)}
                    searchKeyword={searchKeyword}
                    isSelected={selectedChatId === chat.chatRoomId}
                    onClick={() => handleItemClick(chat.chatRoomId)}
                  />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        searchKeyword && (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <p className="text-subtitle1">검색 결과가 없습니다.</p>
            <p className="text-body2 text-gray-700-info">
              {searchKeyword}이/가 포함된 조건을 설정해보세요!
            </p>
          </div>
        )
      )}

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
