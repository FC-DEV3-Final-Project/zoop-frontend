import React, { useEffect, useRef, useState } from "react";

import { Message } from "@/types/chat";

import InitialFilterPrompt from "./InitialFilterPrompt";
import RecommendationCard from "./RecommendationCard/RecommendationCard";
import ChatBubble from "./ChatBubble";
import LoadingDots from "../common/LoadingDots";
import Textarea from "../ui/chatTextarea";

import { useSendMessageMutation } from "@/queries/chat/useSendMessageMutation";

interface ChatMainProps {
  currentChatId: number | null;
  messages: Message[];
  title: string;
}

const ChatMain = ({ currentChatId, messages, title }: ChatMainProps) => {
  const [tempMessages, setTempMessages] = useState<Message[]>([]);

  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  const { mutate } = useSendMessageMutation();

  // 실제 렌더링에 사용될 메시지 배열
  const allMessages = [...messages, ...tempMessages];

  // 새 메시지가 추가될 때 자동으로 스크롤 맨 아래로 이동
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: isFirstRender.current ? "auto" : "smooth",
      });
      isFirstRender.current = false;
    }
  }, [allMessages]);

  const handleSendMessage = (content: string) => {
    const userMessageId = Date.now();
    const chatbotLoadingMessageId = userMessageId + 1;

    // 낙관적 USER 메시지 구성
    const optimisticUserMessage: Message = {
      messageId: userMessageId,
      senderType: "USER",
      content,
      createdAt: new Date().toISOString(),
    };

    // 낙관적 LOADING CHATBOT 메시지 구성
    const loadingChatbotMessage: Message = {
      messageId: chatbotLoadingMessageId,
      senderType: "CHATBOT",
      content: "", // 로딩 판단
      createdAt: new Date().toISOString(),
    };

    setTempMessages([optimisticUserMessage, loadingChatbotMessage]);

    mutate(
      {
        chatRoomId: currentChatId,
        content,
      },
      {
        onSuccess: () => {
          // 서버 응답 도착 시 낙관적 메시지 제거
          setTempMessages([]);
        },
        onError: () => {
          alert("메시지 전송 실패");
          setTempMessages([]);
        },
      },
    );
  };

  return (
    <div className="mb-[66px] mt-16 flex h-full flex-col gap-5 p-5">
      {/** 초기 필터 설정 메세지 */}
      {!currentChatId && <InitialFilterPrompt />}

      {allMessages.map((message, index) => {
        const isLast = index === messages.length - 1;
        const isLoading = message.senderType === "CHATBOT" && message.content === "";

        const messageContent =
          message.properties && message.properties.length > 0 ? (
            <RecommendationCard
              key={message.messageId}
              properties={message.properties}
              title={title}
            />
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

      {/** Input */}
      <div className="fixed -bottom-[1px] left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 rounded-t-2xl bg-white px-5 py-2 shadow-[0px_-4px_8px_rgba(0,0,0,0.04)]">
        <Textarea
          placeholder={"질문을 적어주세요."}
          onSend={(content) => handleSendMessage(content)}
          disabled={!currentChatId}
        />
      </div>
    </div>
  );
};

export default ChatMain;
