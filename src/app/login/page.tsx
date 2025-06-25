"use client";
import Onboarding from "@/components/login/onboarding";
import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showOnboarding, setShowOnboarding] = useState(true); // 다이얼로그 on/off

  const kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}`;

  return (
    <>
      {showOnboarding ? (
        <Onboarding showOnboarding={showOnboarding} setShowOnboarding={setShowOnboarding} />
      ) : (
        <>
          <Header bgColorClassName="bg-white/0">
            <div className="w-6" />
            <Header.Title>ZOOP</Header.Title>
            <Header.Close onCloseClick={() => alert("알림 클릭")} />
          </Header>

          <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#EDF0FD] to-white px-5 pt-16">
            <div className="flex flex-col items-center gap-[11px]">
              <div className="flex items-center gap-[15px]">
                <img src="/icons/jupjup_logo.svg" alt="로고" className="h-8 w-8" />
                <span
                  className="text-logo"
                  style={{
                    background: "linear-gradient(180deg, #3C79F3 0%, #204AE5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ZOOP
                </span>
              </div>

              <span className="text-subtitle1">부동산 매물 추천 AI 챗봇</span>
            </div>
            <Button
              asChild
              className="mt-32 h-[50px] w-full rounded-[8px] bg-[#FEE500] text-base font-medium text-[#000000] hover:bg-[#fada0b]"
            >
              <Link href={kakaoUrl} className="flex w-full items-center justify-center gap-2">
                <img
                  src="/icons/kakao-logo.svg"
                  alt="카카오톡 로고"
                  className="h-[18px] w-[18px]"
                />
                카카오톡으로 로그인
              </Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
