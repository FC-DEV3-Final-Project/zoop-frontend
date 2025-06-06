import React from "react";
import { Button } from "../ui/button";

interface BudgeStepProps {
  onNext: () => void;
}

const BudgeStep = ({ onNext }: BudgeStepProps) => {
  return (
    <div>
      <h1 className="text-[22px] font-medium">생각해 둔 예산을 알려주세요</h1>
      <label>보증금</label>
      <input className="w-full appearance-none border-b-[1px] border-gray-500 bg-transparent pb-2 outline-none placeholder:text-[20px]" />
      <label>월세</label>
      <input className="w-full appearance-none border-b-[1px] border-gray-500 bg-transparent pb-2 outline-none placeholder:text-[20px]" />
      <Button>결과 확인하기</Button>
    </div>
  );
};

export default BudgeStep;
