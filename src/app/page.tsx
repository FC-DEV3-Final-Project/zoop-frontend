"use client";

import Header from "@/layout/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        title="ZOOP"
        onHamburgerClick={() => alert("히스토리 열기")}
        onAlarmClick={() => alert("알림 열기")}
        bgColorClassName="bg-gray-100"
      />
      <main className="flex min-h-screen items-center justify-center pt-16">
        <h1 className="text-2xl font-bold">홈(채팅)페이지입니다</h1>
      </main>
    </div>
  );
}
