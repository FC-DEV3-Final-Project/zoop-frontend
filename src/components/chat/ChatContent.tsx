import React, { useEffect, useRef } from "react";
import Image from "next/image";

import UpIcon from "../../../public/icons/up.svg";

import { Message } from "@/types/chat";

import InitialFilterPrompt from "./InitialFilterPrompt";
import RecommendationCard from "./RecommendationCard/RecommendationCard";
import ChatBubble from "./ChatBubble";
import LoadingDots from "../common/LoadingDots";

interface ChatContentProps {
  currentChatId: number | null;
  messages: Message[];
  title: string;
}

const ChatContent = ({ currentChatId, messages, title }: ChatContentProps) => {
  const isFirstRender = useRef(true);

  const topMessageRef = useRef<HTMLDivElement | null>(null);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // 새 메시지가 추가될 때 자동으로 스크롤 맨 아래로 이동
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: isFirstRender.current ? "auto" : "smooth",
      });
      isFirstRender.current = false;
    }
  }, [messages]);

  const handleTop = () => {
    topMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mb-[66px] mt-16 flex h-full flex-col gap-5 p-5">
      {/** 초기 필터 설정 메세지 */}
      {!currentChatId && <InitialFilterPrompt />}
      {messages.map((message, index) => {
        const isFirst = index === 0;
        const isLast = index === messages.length - 1;
        const isLoading = message.senderType === "CHATBOT" && message.content === "";

        const messageRef = isFirst ? topMessageRef : isLast ? lastMessageRef : undefined;
        const marginTopStyle = isFirst ? { scrollMarginTop: "84px" } : undefined;

        const messageContent =
          message.properties && message.properties.length > 0 ? (
            <RecommendationCard
              key={message.messageId}
              properties={message.properties}
              title={title}
            />
          ) : (
            <div
              ref={messageRef}
              key={message.messageId}
              style={marginTopStyle}
              className={`flex ${message.senderType === "USER" ? "justify-end" : "justify-start"}`}
            >
              <ChatBubble type={message.senderType as "CHATBOT" | "USER"}>
                {isLoading ? <LoadingDots /> : message.content}
              </ChatBubble>
            </div>
          );

        return <React.Fragment key={message.messageId}>{messageContent}</React.Fragment>;
      })}
      <button className="fixed bottom-20 right-4 z-10" onClick={handleTop}>
        <Image src={UpIcon} alt={"up"} />
      </button>
    </div>
  );
};

export default ChatContent;
