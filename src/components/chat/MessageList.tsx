import React, { useEffect, useRef } from "react";
import LoadingDots from "../common/LoadingDots";
import ChatBubble from "./ChatBubble";
import RecommendationCard from "./RecommendationCard/RecommendationCard";
import { Message } from "@/types/chat";

const MessageList = React.memo(({ messages }: { messages: Message[] }) => {
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {messages.map((message, index) => {
        const isLast = index === messages.length - 1;
        const isLoading = message.senderType === "CHATBOT" && message.content === "";

        const messageContent = message.properties ? (
          <RecommendationCard key={message.messageId} properties={message.properties} />
        ) : (
          <div
            key={message.messageId}
            className={`flex ${message.senderType === "USER" ? "justify-end" : "justify-start"}`}
          >
            <ChatBubble type={message.senderType as "CHATBOT" | "USER"}>
              {isLoading ? <LoadingDots /> : message.content}
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
    </>
  );
});

export default MessageList;
