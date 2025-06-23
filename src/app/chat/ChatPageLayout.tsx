// components/chat/ChatPageLayout.tsx
"use client";

import { useEffect, useState } from "react";
import { Header } from "@/layout/Header";
import ChatMain from "@/components/chat/ChatMain";
import SideBar from "@/components/chat/SideBar";
import { Message, Property } from "@/types/chat";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

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

interface ChatPageLayoutProps {
  selectedChatId: number | null;
}

const ChatPageLayout = ({ selectedChatId }: ChatPageLayoutProps) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentChatTitle, setCurrentChatTitle] = useState("ZOOP");
  const [currentChatMessages, setCurrentChatMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (selectedChatId === null) {
      setCurrentChatTitle("ZOOP");
      setCurrentChatMessages([]);
    } else {
      // TODO: selectedChatId에 해당하는 채팅 불러오기 API 호출

      setCurrentChatTitle("강남역 / 월세 / 원룸 ⦁ 투룸 / 80"); // 임시
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
      <SideBar selectedChatId={selectedChatId} onClose={() => setSideBarOpen(false)} />
    </Sheet>
  );
};

export default ChatPageLayout;
