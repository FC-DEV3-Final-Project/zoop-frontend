"use client";

import { useState } from "react";

import { Header } from "@/layout/Header";
import { useChatDataQuery } from "@/queries/chat/useChatDataQuery";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import ChatMain from "@/components/chat/ChatMain";
import SideBar from "@/components/chat/SideBar";

interface ChatPageLayoutProps {
  currentChatId: number | null;
}

const ChatPageLayout = ({ currentChatId }: ChatPageLayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // currentChatId이 있다면 기존의 특정 채팅 불러오기
  const { data: chatData } = useChatDataQuery(currentChatId ?? 0); // 훅은 항상 호출

  const currentChatTitle = chatData?.title || "ZOOP";

  // 메세지 생성 순으로 오름차순 정렬
  const sortedMessages = chatData?.messages
    ? [...chatData.messages].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      )
    : [];

  return (
    <Sheet open={isSideBarOpen} onOpenChange={setIsSideBarOpen}>
      <Header bgColorClassName="bg-gray-100" size="md">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>{currentChatTitle}</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <main className="flex min-h-screen w-full flex-col">
        <div className="fixed top-16 h-[1px] w-full max-w-[600px] bg-gray-400" />
        <ChatMain currentChatId={currentChatId} messages={sortedMessages} />
      </main>
      <SideBar currentChatId={currentChatId} onClose={() => setIsSideBarOpen(false)} />
    </Sheet>
  );
};

export default ChatPageLayout;
