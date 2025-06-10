"use client";

import React from "react";
import { useRouter } from "next/navigation";

import useFunnel from "@/hooks/useFunnel";

import LocationStep from "@/components/setup/LocationStep";
import OptionSelectStep from "@/components/setup/OptionSelectStep";
import BudgeStep from "@/components/setup/BudgeStep";
import Header from "@/layout/Header";

const TRANSACTION_OPTIONS = ["월세", "전세", "매매"];
const HOUSING_OPTIONS = ["원룸 / 투룸", "빌라", "오피스텔", "아파트"];

const Page = () => {
  const { Funnel, Step, currentStep, prevStep, nextStep } = useFunnel({ lastStep: "4" });
  const router = useRouter();

  const getProgressWidthClass = (step: string) => {
    switch (step) {
      case "1":
        return "w-1/4";
      case "2":
        return "w-2/4";
      case "3":
        return "w-3/4";
      case "4":
        return "w-full";
      default:
        return "w-0";
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        title={"필터 설정하기"}
        onPrevClick={prevStep}
        onCloseClick={() => router.push("/")}
      />
      <main className="relative min-h-screen pt-16">
        {/** Progress Bar */}
        <div className="h-[4px] w-full bg-gray-300">
          <div
            className={`h-[4px] rounded-br-[16px] rounded-tr-[16px] bg-blue-800-primary transition-all duration-300 ${getProgressWidthClass(currentStep)}`}
          />
        </div>
        <div className="px-5 pt-10">
          <Funnel>
            <Step name="1">
              <LocationStep onNext={nextStep} />
            </Step>
            <Step name="2">
              <OptionSelectStep onNext={nextStep} title="매매 형태" options={TRANSACTION_OPTIONS} />
            </Step>
            <Step name="3">
              <OptionSelectStep onNext={nextStep} title="주거 형태" options={HOUSING_OPTIONS} />
            </Step>
            <Step name="4">
              <BudgeStep onNext={nextStep} />
            </Step>
          </Funnel>
        </div>
      </main>
    </div>
  );
};

export default Page;
