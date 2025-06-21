"use client";
import { useState } from "react";

import { Header } from "@/layout/Header";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/chat/SideBar";
import ChatMain from "@/components/chat/ChatMain";

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <Sheet open={sideBarOpen} onOpenChange={setSideBarOpen}>
      <Header bgColorClassName="bg-gray-100">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>ZOOP</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <main className="flex min-h-screen w-full flex-col">
        <div className="fixed top-16 h-[1px] w-full max-w-[600px] bg-gray-400" />
        <ChatMain />
      </main>
      <SideBar onClose={() => setSideBarOpen(false)} />
    </Sheet>
  );
}
