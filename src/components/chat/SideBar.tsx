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

interface SideBarProps {
  onClose?: () => void;
}

// 임시
const dummyData = [
  {
    chatRoomId: 1,
    title: "강남역 / 월세 / 오피스텔 / 1억",
    lastMatchingMessage: null,
    lastMessageAt: "2025-06-19T10:15:23.000Z",
  },
  {
    chatRoomId: 2,
    title: "노원 / 전세 / 아파트 / 5억",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",
    lastMessageAt: "2025-06-18T17:42:10.000Z",
  },
  {
    chatRoomId: 3,
    title: "건대입구 / 매매 / 빌라 / 4억",
    lastMatchingMessage: null,
    lastMessageAt: "2025-06-17T09:00:00.000Z",
  },
  {
    chatRoomId: 4,
    title: "이수역 / 전세 / 아파트 / 6억",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",

    lastMessageAt: "2025-06-15T22:33:46.864Z",
  },
  {
    chatRoomId: 5,
    title: "홍대 / 월세 / 원룸 / 7천만",
    lastMatchingMessage: "관공서가 가까운 곳을 추천해줘",

    lastMessageAt: "2025-06-16T13:12:54.000Z",
  },
  {
    chatRoomId: 6,
    title: "잠실 / 매매 / 아파트 / 10억",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",

    lastMessageAt: "2025-06-14T19:45:00.000Z",
  },
  {
    chatRoomId: 7,
    title: "역삼 / 전세 / 오피스텔 / 3억",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",

    lastMessageAt: "2025-06-18T08:25:12.000Z",
  },
  {
    chatRoomId: 8,
    title: "합정 / 월세 / 투룸 / 1억 5천",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",

    lastMessageAt: "2025-06-13T11:05:30.000Z",
  },
  {
    chatRoomId: 9,
    title: "노원 / 매매 / 아파트 / 6억 2천",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",

    lastMessageAt: "2025-06-12T20:50:00.000Z",
  },
  {
    chatRoomId: 10,
    title: "신림 / 전세 / 빌라 / 2억 5천",
    lastMatchingMessage:
      "이수 지역, 가격대, 매물 유형 등을 설정하려면 '필터 설정하기' 버튼을 이용해주세요.",

    lastMessageAt: "2025-06-11T15:40:00.000Z",
  },
];

const SideBar = ({ onClose }: SideBarProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [searchResults, setSearchResults] = useState([]); // API 응답 값 저장할 상태

  // TODO: 채팅 목록 조회 API

  // (임시) 검색어 기준 필터링
  const filteredChats = dummyData.filter((chat) =>
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
    alert("새로운 대화 시작하기");

    // TODO : 채팅방 생성 API
  };

  const handleItemClick = (chatId: number) => {
    setSelectedChatId(chatId);
    setSearchKeyword(""); // 검색어 초기화
    onClose?.(); // 아이템 클릭 시 사이드바 닫기

    // TODO: 채팅 불러오기 API
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
          <Image src={NewChatIcon} alt={"새로운 채팅"} width={24} height={24} />
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
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <p className="text-subtitle1">검색 결과가 없습니다.</p>
          <p className="text-body2 text-gray-700-info">
            {searchKeyword}이/가 포함된 조건을 설정해보세요!
          </p>
        </div>
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
