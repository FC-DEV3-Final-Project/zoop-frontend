import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import RecommendationCard from "@/components/chat/RecommendationCard/RecommendationCard";
import AutoResizeTextarea from "@/components/ui/textarea";

import { useUserInfoStore } from "@/stores/useUserInfoStore";
import { Property } from "@/types/chat";

import ChatBubble from "./ChatBubble";

interface Message {
  messageId: number;
  senderType: "CHATBOT" | "USER";
  content: string;
  createdAt: string;
  properties?: Property[];
}

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

const ChatMain = () => {
  const { user } = useUserInfoStore();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(dummyMessageData); // 임시
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메세지 생성 최신 순으로 정렬
  const sortedMessages = useMemo(() => {
    return [...messages].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
  }, [messages]);

  const handleSendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // TODO: 채팅 메시지 보내기 API

    const newMessage: Message = {
      messageId: Date.now(), // 임시. 간단한 ID 생성
      senderType: "USER",
      content: trimmed,
      createdAt: new Date().toISOString(), // 임시
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="mb-[66px] mt-16 flex h-full flex-col gap-5 p-5">
      {/** 초기 필터 설정 메세지 */}
      {/** TODO: 조건 수정 필요 */}
      {messages.length === 0 && (
        <ChatBubble className="flex flex-col gap-2" type="CHATBOT">
          <p>
            {user?.nickname}님 반가워요. <br /> {user?.nickname}님께 딱 맞는 매물을 추천해드릴게요.
            <br /> 지역, 매매 형태, 주거 형태, 예산을 선택해 주세요.
          </p>
          <Link
            href={"/filter"}
            className="w-full rounded-[50px] bg-blue-50 py-2 text-center text-caption1"
          >
            필터 설정하기
          </Link>
        </ChatBubble>
      )}

      {sortedMessages.map((message) => {
        return message.properties ? (
          // 매물 추천이 있을 경우
          <RecommendationCard key={message.messageId} properties={message.properties} />
        ) : (
          // 일반 메세지
          <div
            key={message.messageId}
            className={`flex ${message.senderType === "USER" ? "justify-end" : "justify-start"}`}
          >
            <ChatBubble type={message.senderType as "CHATBOT" | "USER"}>
              {message.content}
            </ChatBubble>
          </div>
        );
      })}

      <div ref={lastMessageRef} />

      {/** Input */}
      <div className="fixed -bottom-[1px] left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 rounded-t-2xl bg-white px-5 py-2 shadow-[0px_-4px_8px_rgba(0,0,0,0.04)]">
        <AutoResizeTextarea
          placeholder={"질문을 적어주세요."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatMain;
