"use client";

import Link from "next/link";

import ChatBubble from "@/components/common/ChatBubble";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <Sheet>
      <Header bgColorClassName="bg-gray-100">
        <SheetTrigger>
          <Header.Hamburger />
        </SheetTrigger>
        <Header.Title>ZOOP</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-16 w-full border-t-[1px] border-gray-400" />
        <main className="p-5 mt-16">
          <ChatBubble className="flex flex-col gap-2">
            <p>
              OO님 반가워요. <br /> OO님께 딱 맞는 매물을 추천해드릴게요. <br /> 지역, 매매 형태,
              주거 형태, 예산을 선택해 주세요.
            </p>
            <Link
              href={"/chat/filter"}
              className="w-full rounded-[50px] bg-blue-50 py-2 text-center text-caption1"
            >
              필터 설정하기
            </Link>
          </ChatBubble>
        </main>
      </div>
      {/** History SideBar */}
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <div>검색창</div>
          </SheetTitle>
          <div>새로운 대화 시작하기</div>
        </SheetHeader>
        <div>히스토리 목록</div>
        <SheetFooter>
          <div>내 프로필</div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
