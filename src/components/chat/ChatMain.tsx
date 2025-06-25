import React, { useEffect, useRef, useState } from "react";

import RecommendationCard from "@/components/chat/RecommendationCard/RecommendationCard";
import AutoResizeTextarea from "@/components/ui/textarea";

import { Message } from "@/types/chat";

import ChatBubble from "./ChatBubble";
import InitialFilterPrompt from "./InitialFilterPrompt";
import { useSendMessageMutation } from "@/queries/chat/useSendMessageMutation";
import LoadingDots from "../common/LoadingDots";

interface ChatMainProps {
  currentChatId: number | null;
  messages: Message[];
}

const ChatMain = ({ currentChatId, messages }: ChatMainProps) => {
  const [input, setInput] = useState("");
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

  const handleSendMessage = () => {
    const content = input.trim();
    if (!content || !currentChatId) return;

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
    setInput("");

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

      {/** Input */}
      <div className="fixed -bottom-[1px] left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 rounded-t-2xl bg-white px-5 py-2 shadow-[0px_-4px_8px_rgba(0,0,0,0.04)]">
        <AutoResizeTextarea
          placeholder={"질문을 적어주세요."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={handleSendMessage}
          disabled={!currentChatId}
        />
      </div>
    </div>
  );
};

export default ChatMain;
