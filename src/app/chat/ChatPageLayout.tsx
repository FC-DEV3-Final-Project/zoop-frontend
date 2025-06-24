"use client";

import { useEffect, useState } from "react";

import { Header } from "@/layout/Header";
import { Message } from "@/types/chat";
import { useChatDataQuery } from "@/queries/chat/useChatDataQuery";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import ChatMain from "@/components/chat/ChatMain";
import SideBar from "@/components/chat/SideBar";

interface ChatPageLayoutProps {
  currentChatId: number | null;
}

const ChatPageLayout = ({ currentChatId }: ChatPageLayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentChatTitle, setCurrentChatTitle] = useState("ZOOP");
  const [currentChatMessages, setCurrentChatMessages] = useState<Message[]>([]);

  // currentChatId이 있다면 기존의 특정 채팅 불러오기
  const { data: chatData } =
    currentChatId !== null ? useChatDataQuery(currentChatId) : { data: null };

  useEffect(() => {
    if (!chatData) return;

    setCurrentChatTitle(chatData.title || "ZOOP");

    // 메세지 생성 순으로 오름차순
    const sortedMessages = [...chatData.messages].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
    setCurrentChatMessages(sortedMessages);
  }, [chatData]);

  return (
    <Sheet open={isSideBarOpen} onOpenChange={setIsSideBarOpen}>
      <Header bgColorClassName="bg-gray-100" size="md">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>{currentChatTitle}</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <main className="flex flex-col w-full min-h-screen">
        <div className="fixed top-16 h-[1px] w-full max-w-[600px] bg-gray-400" />
        <ChatMain currentChatId={currentChatId} messages={currentChatMessages} />
      </main>
      <SideBar currentChatId={currentChatId} onClose={() => setIsSideBarOpen(false)} />
    </Sheet>
  );
};

export default ChatPageLayout;
