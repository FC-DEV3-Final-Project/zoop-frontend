"use client";
import Link from "next/link";

import ChatBubble from "@/components/chat/ChatBubble";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/chat/SideBar";
import { Header } from "@/layout/Header";
import { useState } from "react";
import { useUserInfoStore } from "@/stores/useUserInfoStore";
import AutoResizeTextarea from "@/components/ui/textarea";

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { user } = useUserInfoStore();
  console.log(localStorage.getItem("access_token"));
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("전송된 메시지:", message);
      setMessage(""); // 입력창 비우기
    }
  };
  return (
    <Sheet open={sideBarOpen} onOpenChange={setSideBarOpen}>
      <Header bgColorClassName="bg-gray-100">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>ZOOP</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <div className="flex min-h-screen w-full flex-col">
        <div className="fixed top-16 h-[1px] w-full max-w-[600px] bg-gray-400" />
        <main className="mt-16 p-5">
          <ChatBubble className="flex flex-col gap-2" type="CHATBOT">
            <p>
              {user?.nickname}님 반가워요. <br /> {user?.nickname}님께 딱 맞는 매물을
              추천해드릴게요. <br /> 지역, 매매 형태, 주거 형태, 예산을 선택해 주세요.
            </p>
            <Link
              href={"/filter"}
              className="w-full rounded-[50px] bg-blue-50 py-2 text-center text-caption1"
            >
              필터 설정하기
            </Link>
          </ChatBubble>
        </main>
        <div className="fixed bottom-0 left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 bg-white px-5 py-2">
          <AutoResizeTextarea
            placeholder="메시지를 입력하세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onSend={handleSendMessage}
          />
        </div>
      </div>
      <SideBar onClose={() => setSideBarOpen(false)} />
    </Sheet>
  );
}
