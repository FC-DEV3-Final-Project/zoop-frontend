"use client";

import { useCallback, useState } from "react";

import { Header } from "@/layout/Header";
import { Message } from "@/types/chat";

import { useChatDataQuery } from "@/queries/chat/useChatDataQuery";
import { useSendMessageMutation } from "@/queries/chat/useSendMessageMutation";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import ChatContent from "@/components/chat/ChatContent";
import SideBar from "@/components/chat/SideBar";
import Textarea from "@/components/ui/chatTextarea";

interface ChatPageLayoutProps {
  currentChatId: number | null;
}

const ChatPageLayout = ({ currentChatId }: ChatPageLayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [tempMessages, setTempMessages] = useState<Message[]>([]);

  const { mutate } = useSendMessageMutation();

  // currentChatId이 있다면 기존의 특정 채팅 불러오기
  const { data: chatData } = useChatDataQuery(currentChatId ?? 0); // 훅은 항상 호출

  const currentChatTitle = chatData?.title || "ZOOP";

  // 메세지 생성 순으로 오름차순 정렬
  const sortedMessages = chatData?.messages
    ? [...chatData.messages].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      )
    : [];

  // 실제 렌더링에 사용될 메시지 배열
  const allMessages = [...sortedMessages, ...tempMessages];

  const handleSendMessage = useCallback((content: string) => {
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
  }, []);

  return (
    <Sheet open={isSideBarOpen} onOpenChange={setIsSideBarOpen}>
      <Header bgColorClassName="bg-gray-100" size="md">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>{currentChatTitle}</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <main className="relative flex min-h-screen w-full flex-col">
        <div className="fixed top-16 h-[1px] w-full max-w-[600px] bg-gray-400" />
        <ChatContent
          currentChatId={currentChatId}
          messages={allMessages}
          title={currentChatTitle}
        />
        {/** Input */}
        <div className="fixed -bottom-[1px] left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 rounded-t-2xl bg-white px-5 py-2 shadow-[0px_-4px_8px_rgba(0,0,0,0.04)]">
          <Textarea
            placeholder={"질문을 적어주세요."}
            onSend={(content) => handleSendMessage(content)}
            disabled={!currentChatId}
          />
        </div>
      </main>
      <SideBar currentChatId={currentChatId} onClose={() => setIsSideBarOpen(false)} />
    </Sheet>
  );
};

export default ChatPageLayout;
