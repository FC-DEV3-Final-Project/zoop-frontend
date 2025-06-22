import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import RecommendationCard from "@/components/chat/RecommendationCard/RecommendationCard";
import AutoResizeTextarea from "@/components/ui/textarea";

import { useUserInfoStore } from "@/stores/useUserInfoStore";
import { Message } from "@/types/chat";

import ChatBubble from "./ChatBubble";

interface ChatMainProps {
  selectedChatId: number | null;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatMain = ({ selectedChatId, messages, setMessages }: ChatMainProps) => {
  const { user } = useUserInfoStore();
  const [input, setInput] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메세지 생성 최신 순으로 정렬
  const sortedMessages = useMemo(() => {
    if (!messages) return;

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
      {!selectedChatId && (
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

      {sortedMessages &&
        sortedMessages.map((message, index) => {
          const isLast = index === sortedMessages.length - 1;
          const messageContent = message.properties ? (
            <RecommendationCard key={message.messageId} properties={message.properties} />
          ) : (
            <div
              key={message.messageId}
              className={`flex ${message.senderType === "USER" ? "justify-end" : "justify-start"}`}
            >
              <ChatBubble type={message.senderType as "CHATBOT" | "USER"}>
                {message.content}
              </ChatBubble>
            </div>
          );

          return (
            <React.Fragment key={message.messageId}>
              {messageContent}
              {isLast && <div ref={lastMessageRef} />}
            </React.Fragment>
          );
        })}

      {/** Input */}
      <div className="fixed -bottom-[1px] left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 rounded-t-2xl bg-white px-5 py-2 shadow-[0px_-4px_8px_rgba(0,0,0,0.04)]">
        <AutoResizeTextarea
          placeholder={"질문을 적어주세요."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={handleSendMessage}
          disabled={!selectedChatId}
        />
      </div>
    </div>
  );
};

export default ChatMain;
