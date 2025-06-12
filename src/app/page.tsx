"use client";

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
        <main className="mt-16">
          <h1 className="text-2xl font-bold">홈(채팅)페이지입니다</h1>
        </main>
      </div>
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
