"use client";

import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header bgColorClassName="bg-gray-100">
        <Header.Hamburger onClick={() => alert("햄버거 클릭")} />
        <Header.Title>ZOOP</Header.Title>
        <Header.Alarm onClick={() => alert("알림 클릭")} />
      </Header>

      <main className="flex min-h-screen items-center justify-center pt-16">
        <h1 className="text-2xl font-bold">홈(채팅)페이지입니다</h1>
      </main>
    </div>
  );
}
