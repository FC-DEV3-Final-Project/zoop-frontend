"use client";

import { useState } from "react";

interface StepProps {
  name: string;
  children: React.ReactNode;
}

interface FunnelProps {
  children: Array<React.ReactElement<StepProps>>;
}

const useFunnel = (defaultStep: string, lastStep: string) => {
  const [step, setStep] = useState(defaultStep);

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

  return { Funnel, Step, setStep, currentStep: step, prevStep, nextStep };
};

export default useFunnel;
