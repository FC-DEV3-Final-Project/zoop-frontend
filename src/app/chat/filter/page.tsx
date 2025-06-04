"use client";

import React from "react";

import useFunnel from "@/hooks/useFunnel";

import LocationStep from "@/components/setup/LocationStep";
import TransactionTypeStep from "@/components/setup/TransactionTypeStep";
import HousingTypeStep from "@/components/setup/HousingTypeStep";
import BudgeStep from "@/components/setup/BudgeStep";

const Page = () => {
  const { Funnel, Step, nextStep } = useFunnel("1", "4");

  return (
    <div className="h-full px-5 pt-[45px]">
      <Funnel>
        <Step name="1">
          <LocationStep onNext={nextStep} />
        </Step>
        <Step name="2">
          <TransactionTypeStep onNext={nextStep} />
        </Step>
        <Step name="3">
          <HousingTypeStep onNext={nextStep} />
        </Step>
        <Step name="4">
          <BudgeStep onNext={nextStep} />
        </Step>
      </Funnel>
    </div>
  );
};

export default Page;
