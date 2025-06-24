"use client";

import { useState } from "react";
import { Header } from "@/layout/Header";
import { Button } from "../ui/button";

export default function Onboarding({
  showOnboarding,
  setShowOnboarding,
}: {
  showOnboarding: boolean;
  setShowOnboarding: (showOnboarding: boolean) => void;
}) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    else {
      setShowOnboarding(false);
    }
  };

  const mainMessage = {
    1: "AI 기반의 빠르고 정확한\n매물 추천 시스템",
    2: "다양한 매물을\n손쉽게 비교 가능",
    3: "여기저기 흩어져 있는\n정보가 한 눈에 쏙",
    4: "자유롭게 정보를 나눌 수 있는\n매물 리뷰 게시판",
    5: "알림 기능으로\n관심 매물 실시간 확인",
  };

  const subMessage = {
    1: "채팅으로 더 쉽고 빠르게\n최적의 매물을 찾아요.",
    2: "비교하기 기능으로 최대 3개의 매물을\n동시에 확인할 수 있어요.",
    3: "AI가 매물 특징, 가격, 주변 시설 정보를\n빠르게 분석해 한 눈에 볼 수 있어요.",
    4: "거주자들의 후기를 참고하고\n자유롭게 정보를 공유해요.",
    5: "알림 조건을 설정하면 원하는 매물이\n올라올 때 실시간으로 알 수 있어요.",
  };

  const image = {
    1: "/imgs/onboardingImage1.svg",
    2: "/imgs/onboardingImage2.svg",
    3: "/imgs/onboardingImage3.svg",
    4: "/imgs/onboardingImage4.svg",
    5: "/imgs/onboardingImage5.svg",
  };

  const buttonText = {
    1: "다음",
    2: "다음",
    3: "다음",
    4: "다음",
    5: "ZOOP 시작하기",
  };

  return (
    <>
      {/* 헤더 */}
      <Header bgColorClassName="bg-white">
        <div className="w-6" />
        <Header.Close onCloseClick={() => setShowOnboarding(false)} />
      </Header>
      <div className="flex min-h-screen flex-col items-center bg-white pt-12">
        {/* 메인메세지 */}
        <div className="whitespace-pre-line text-center text-title5 h-[62px]">
          {mainMessage[step as keyof typeof mainMessage]}
        </div>
        {/* 서브메세지 */}
        <div className="whitespace-pre-line mt-[13px] text-center text-body2 text-gray-700-info h-[40px]">
          {subMessage[step as keyof typeof subMessage]}
        </div>
        {/* 이미지 */}
        <div className="flex w-full flex-1 items-start justify-center overflow-hidden px-[56px] mt-5">
          <img
            src={image[step as keyof typeof image]}
            alt="onboarding"
            className="h-auto w-full object-cover"
          />
        </div>
        {/* 버튼 */}
        <div className="fixed bottom-0 left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 bg-white px-5 py-3">
          {/* 그라데이션 박스 */}
          <div className="absolute bottom-full left-0 h-[200px] w-full bg-gradient-to-t from-white to-transparent"></div>
          <Button variant="default" onClick={nextStep}>
            {buttonText[step as keyof typeof buttonText]}
          </Button>
        </div>
      </div>
    </>
  );
}
