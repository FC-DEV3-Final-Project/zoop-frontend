"use client";

import { useState } from "react";
import { RealEstateType, RealEstateTypeCode, TradeType, TradeTypeCode } from "@/types/filter";

interface StepProps {
  name: string;
  children: React.ReactNode;
}

interface FunnelProps {
  children: Array<React.ReactElement<StepProps>>;
}

interface StepData {
  place: {
    selectedPlace: {
      x: string;
      y: string;
      bCode: string;
      hCode: string;
      placeName: string;
    };
    tradeTypeCode: TradeTypeCode;
    realEstateTypeCode: RealEstateTypeCode[];
  };
  tradeType: TradeType[];
  realEstateType: RealEstateType[];
}

const useFunnel = ({ lastStep }: { lastStep: string }) => {
  const [step, setStep] = useState("1");
  const [stepData, setStepData] = useState<StepData>({
    place: {
      selectedPlace: {
        x: "",
        y: "",
        bCode: "",
        hCode: "",
        placeName: "",
      },
      tradeTypeCode: "" as TradeTypeCode,
      realEstateTypeCode: [],
    },
    tradeType: [],
    realEstateType: [],
  });

  const Step = (props: StepProps): React.ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return targetStep;
  };

  const prevStep = () => {
    if (step !== "1") {
      setStep(String(Number(step) - 1));
    }
  };

  const nextStep = () => {
    if (String(Number(step) + 1) <= lastStep) {
      setStep(String(Number(step) + 1));
    }
  };

  const updateStepData = (key: keyof StepData, value: any) => {
    setStepData((prev) => ({ ...prev, [key]: value }));
  };

  return { Funnel, Step, setStep, currentStep: step, prevStep, nextStep, stepData, updateStepData };
};

export default useFunnel;
