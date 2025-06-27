"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import useFunnel from "@/hooks/useFunnel";
import { Header } from "@/layout/Header";
import { LocationStepData } from "@/types/filter";

import LocationStep from "@/components/filter/LocationStep";
import OptionSelectStep from "@/components/filter/OptionSelectStep";
import BudgetStep from "@/components/filter/BudgetStep";
import ProgressBar from "@/components/filter/ProgressBar";
import PropertySearchLoading from "@/components/filter/PropertySearchLoading";

const TRADE_TYPE_OPTIONS = ["월세", "전세", "매매"];
const REAL_ESTATE_TYPE_OPTIONS = ["원룸 / 투룸", "빌라", "오피스텔", "아파트"];

const Page = () => {
  const { Funnel, Step, currentStep, prevStep, nextStep, stepData, updateStepData } = useFunnel({
    lastStep: "4",
  });
  const router = useRouter();

  const [showLoading, setShowLoading] = useState(false);

  // step1일 때는 홈으로, 그 외에는 이전 스텝으로
  const handlePrevClick = () => {
    if (currentStep === "1") {
      router.push("/");
    } else {
      prevStep();
    }
  };

  const handleLocationDataChange = (data: Partial<LocationStepData>) => {
    const currentLocationData = stepData.place || {};
    updateStepData("place", { ...currentLocationData, ...data });
  };

  return (
    <div className="h-screen">
      {showLoading ? (
        <Header>
          <Header.Title>AI 매물 찾기</Header.Title>
        </Header>
      ) : (
        <Header>
          <Header.Prev onPrevClick={handlePrevClick} />
          <Header.Title>필터 설정하기</Header.Title>
          <Header.Close onCloseClick={() => router.push("/")} />
        </Header>
      )}

      <main className="h-screen bg-white pt-[48px]">
        {showLoading ? (
          <PropertySearchLoading />
        ) : (
          <>
            <ProgressBar currentStep={currentStep} />
            <div className="h-[calc(100%-4px)] px-5 pt-10">
              <Funnel>
                <Step name="1">
                  <LocationStep
                    onNext={nextStep}
                    savedLocationData={typeof stepData.place === "object" ? stepData.place : {}}
                    onLocationDataChange={handleLocationDataChange}
                  />
                </Step>
                <Step name="2">
                  <OptionSelectStep
                    onNext={nextStep}
                    title="매매 형태"
                    options={TRADE_TYPE_OPTIONS}
                    multiSelect={false}
                    savedOptions={stepData.tradeType || []}
                    onOptionsChange={(options) => updateStepData("tradeType", options)}
                  />
                </Step>
                <Step name="3">
                  <OptionSelectStep
                    onNext={nextStep}
                    title="주거 형태"
                    options={REAL_ESTATE_TYPE_OPTIONS}
                    savedOptions={stepData.realEstateType || []}
                    onOptionsChange={(options) => updateStepData("realEstateType", options)}
                  />
                </Step>
                <Step name="4">
                  <BudgetStep stepData={stepData} setShowLoading={setShowLoading} />
                </Step>
              </Funnel>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Page;
