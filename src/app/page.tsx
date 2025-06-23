"use client";
import { useEffect, useState } from "react";

import { Header } from "@/layout/Header";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/chat/SideBar";
import ChatMain from "@/components/chat/ChatMain";

import { Message, Property } from "@/types/chat";

// 임시
const dummyChatPreviewListData = [
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

// 임시
const dummyPropertyData: Property[] = [
  {
    order: 1,
    propertyId: 98,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "올수리", "소형평수", "방두개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 32,
    imageUrl: null,
  },
  {
    order: 2,
    propertyId: 109,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "소형평수", "방세개", "화장실한개"],
    articleName: "단독",
    realEstateTypeName: "단독/다가구",
    netArea: 31,
    imageUrl: null,
  },
  {
    order: 3,
    propertyId: 149,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "500",
    tagList: ["25년이상", "역세권", "방두개", "화장실한개"],
    articleName: "단독",
    realEstateTypeName: "단독/다가구",
    netArea: 45,
    imageUrl: null,
  },
  {
    order: 4,
    propertyId: 411,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "소형평수", "방세개", "화장실한개"],
    articleName: "단독",
    realEstateTypeName: "단독/다가구",
    netArea: 31,
    imageUrl: null,
  },
  {
    order: 5,
    propertyId: 412,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "융자금없는", "소형평수", "화장실한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 18,
    imageUrl:
      "https://landthumb-phinf.pstatic.net/20250610_278/1749536795090vzlUC_JPEG/13813312_20232710134217.jpg",
  },
  {
    order: 6,
    propertyId: 413,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "소형평수", "방한개", "화장실한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 20,
    imageUrl: null,
  },
  {
    order: 7,
    propertyId: 414,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "융자금적은", "소형평수", "방한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 21,
    imageUrl: null,
  },
  {
    order: 8,
    propertyId: 415,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "화장실한개", "소형평수", "방한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 28,
    imageUrl: null,
  },
  {
    order: 9,
    propertyId: 416,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "화장실한개", "소형평수", "방한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 19,
    imageUrl: null,
  },
  {
    order: 10,
    propertyId: 417,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "융자금적은", "화장실한개", "소형평수"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 19,
    imageUrl: null,
  },
];
const dummyMessageData: Message[] = [
  {
    messageId: 163,
    senderType: "CHATBOT",
    content: "지윤님의 조건에 알맞는 10개의 새로운 매물을 발견했습니다.",
    createdAt: "2025-06-17T11:21:21.683968",
    properties: dummyPropertyData,
  },
  {
    messageId: 164,
    senderType: "CHATBOT",
    content: "추가하고 싶은 다른 조건이 있으신가요?",
    createdAt: "2025-06-17T11:21:21.683970",
  },
  {
    messageId: 165,
    senderType: "USER",
    content: "관공서가 가까운 곳을 추천해줘",
    createdAt: "2025-06-17T11:24:21.683968",
  },
  {
    messageId: 166,
    senderType: "CHATBOT",
    content: "해당 조건에 일치하는 매물을 찾지 못하였습니다. 다른 조건을 입력해보세요.",
    createdAt: "2025-06-17T11:24:40.015175",
  },
  {
    messageId: 167,
    senderType: "USER",
    content: "그럼 병원이 가까운 곳으로 찾아봐",
    createdAt: "2025-06-17T11:24:40.484026",
  },
  {
    messageId: 168,
    senderType: "CHATBOT",
    content: "해당 조건에 일치하는 매물을 찾지 못하였습니다. 다른 조건을 입력해보세요.",
    createdAt: "2025-06-17T11:25:40.015175",
  },
  {
    messageId: 169,
    senderType: "USER",
    content: "그럼 학교가 가까운 곳으로 찾아봐",
    createdAt: "2025-06-17T11:26:40.484026",
  },
  {
    messageId: 170,
    senderType: "CHATBOT",
    content: "해당 조건에 일치하는 매물을 찾지 못하였습니다. 다른 조건을 입력해보세요.",
    createdAt: "2025-06-17T11:27:40.015175",
  },
  {
    messageId: 171,
    senderType: "USER",
    content: "그럼 경찰서가 가까운 곳으로 찾아봐",
    createdAt: "2025-06-17T11:28:40.484026",
  },
];

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(1);

  // API 응답 값 저장할 상태
  const [currentChatTitle, setCurrentChatTitle] = useState("ZOOP");
  const [currentChatMessages, setCurrentChatMessages] = useState<Message[]>(dummyMessageData);

  useEffect(() => {
    // 새로운 대화 시작하기 버튼 누를 경우
    if (selectedChatId === null) {
      setCurrentChatMessages([]);
      setCurrentChatTitle("ZOOP");
    } else {
      // TODO
      // 1. 특정 채팅 불러오기 API 호출
      setCurrentChatTitle("강남역 / 월세 / 오피스텔 / 1억"); // 임시
      setCurrentChatMessages(dummyMessageData); // 임시
    }
  }, [selectedChatId]);

  return (
    <Sheet open={sideBarOpen} onOpenChange={setSideBarOpen}>
      <Header bgColorClassName="bg-gray-100" size="md">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>{currentChatTitle}</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <main className="flex min-h-screen w-full flex-col">
        <div className="fixed top-16 h-[1px] w-full max-w-[600px] bg-gray-400" />
        <ChatMain
          selectedChatId={selectedChatId}
          messages={currentChatMessages}
          setMessages={setCurrentChatMessages}
        />
      </main>
      <SideBar
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
        onClose={() => setSideBarOpen(false)}
      />
    </Sheet>
  );
}
