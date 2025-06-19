"use client";

import React from "react";
import { useRouter } from "next/navigation";

import useFunnel from "@/hooks/useFunnel";

import { Header } from "@/layout/Header";

import LocationStep from "@/components/setup/LocationStep";
import OptionSelectStep from "@/components/setup/OptionSelectStep";
import BudgetStep from "@/components/setup/BudgetStep";
import ProgressBar from "@/components/setup/ProgressBar";

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
                savedSearchKeyword={stepData.location || ""}
                onSearchKeywordChange={(place) => updateStepData("location", place)}
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
                savedBudget={stepData.budget || { deposit: "0" }}
                onBudgetChange={(budget) => updateStepData("budget", budget)}
              />
            </Step>
          </Funnel>
        </div>
      </main>
    </div>
  );
};

export default Page;
