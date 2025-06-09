"use client";

import React from "react";

import useFunnel from "@/hooks/useFunnel";

import LocationStep from "@/components/setup/LocationStep";
import OptionSelectStep from "@/components/setup/OptionSelectStep";
import BudgeStep from "@/components/setup/BudgeStep";

const TRANSACTION_OPTIONS = ["월세", "전세", "매매"];
const HOUSING_OPTIONS = ["원룸 / 투룸", "빌라", "오피스텔", "아파트"];

const Page = () => {
  const { Funnel, Step, nextStep } = useFunnel("1", "4");

  return (
    <div className="h-full px-5 pt-10">
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
  );
};

export default Page;
