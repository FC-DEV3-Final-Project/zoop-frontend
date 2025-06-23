"use client";

import { useEffect, useState } from "react";

import { Header } from "@/layout/Header";
import { Message } from "@/types/chat";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import ChatMain from "@/components/chat/ChatMain";
import SideBar from "@/components/chat/SideBar";

import { useChatDataQuery } from "@/queries/chat/useChatDataQuery";

interface ChatPageLayoutProps {
  selectedChatId: number | null;
}

const ChatPageLayout = ({ selectedChatId }: ChatPageLayoutProps) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentChatTitle, setCurrentChatTitle] = useState("ZOOP");
  const [currentChatMessages, setCurrentChatMessages] = useState<Message[]>([]);

  // selectedChatId이 있다면 기존의 특정 채팅 불러오기
  const { data: chatData } =
    selectedChatId !== null ? useChatDataQuery(selectedChatId) : { data: null };

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
