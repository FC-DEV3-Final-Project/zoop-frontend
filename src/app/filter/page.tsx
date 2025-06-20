"use client";

import React from "react";
import { useRouter } from "next/navigation";

import useFunnel from "@/hooks/useFunnel";

import { Header } from "@/layout/Header";

import LocationStep from "@/components/filter/LocationStep";
import OptionSelectStep from "@/components/filter/OptionSelectStep";
import BudgetStep from "@/components/filter/BudgetStep";
import ProgressBar from "@/components/filter/ProgressBar";
import { LocationStepData } from "@/types/filter";

const TRANSACTION_OPTIONS = ["월세", "전세", "매매"];
const HOUSING_OPTIONS = ["원룸 / 투룸", "빌라", "오피스텔", "아파트"];

const Page = () => {
  const { Funnel, Step, currentStep, prevStep, nextStep, stepData, updateStepData } = useFunnel({
    lastStep: "4",
  });
  const router = useRouter();

  // step1일 때는 홈으로, 그 외에는 이전 스텝으로
  const handlePrevClick = () => {
    if (currentStep === "1") {
      router.push("/");
    } else {
      prevStep();
    }
  };

  const handleLocationDataChange = (data: Partial<LocationStepData>) => {
    const currentLocationData = stepData.location || {};
    updateStepData("location", { ...currentLocationData, ...data });
  };

  return (
    <div className="min-h-screen">
      <Header>
        <Header.Prev onPrevClick={handlePrevClick} />
        <Header.Title>필터 설정하기</Header.Title>
        <Header.Close onCloseClick={() => router.push("/")} />
      </Header>
      <main className="relative min-h-screen bg-white pt-16">
        <ProgressBar currentStep={currentStep} />

        <div className="px-5 pt-10">
          <Funnel>
            <Step name="1">
              <LocationStep
                onNext={nextStep}
                savedLocationData={typeof stepData.location === "object" ? stepData.location : {}}
                onLocationDataChange={handleLocationDataChange}
              />
            </Step>
            <Step name="2">
              <OptionSelectStep
                onNext={nextStep}
                title="매매 형태"
                options={TRANSACTION_OPTIONS}
                multiSelect={false}
                savedOptions={stepData.transactionType || []}
                onOptionsChange={(options) => updateStepData("transactionType", options)}
              />
            </Step>
            <Step name="3">
              <OptionSelectStep
                onNext={nextStep}
                title="주거 형태"
                options={HOUSING_OPTIONS}
                savedOptions={stepData.housingType || []}
                onOptionsChange={(options) => updateStepData("housingType", options)}
              />
            </Step>
            <Step name="4">
              <BudgetStep
                onNext={nextStep}
                transactionType={(stepData.transactionType?.[0] as "월세" | "매매" | "전세") || ""}
              />
            </Step>
          </Funnel>
        </div>
      </main>
    </div>
  );
};

export default Page;
