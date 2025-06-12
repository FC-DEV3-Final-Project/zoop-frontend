import React, { useState } from "react";
import { Button } from "../ui/button";

interface BudgetStepProps {
  onNext: () => void;
}

const BudgetStep = ({ onNext }: BudgetStepProps) => {
  const [deposit, setDeposit] = useState("0"); // 보증금
  const [monthlyRent, setMonthlyRent] = useState("0"); // 월세

  return (
    <div className="flex flex-col h-full gap-5">
      <h1 className="text-[22px] font-medium">생각해 둔 예산을 알려주세요</h1>
      <div className="flex flex-col gap-1">
        <div className="relative">
          <label className="text-gray-800 text-subtitle2">보증금</label>
          <input
            className="w-full appearance-none border-b-[2px] border-gray-500-alternative bg-transparent py-2 text-[20px] font-medium outline-none"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
          <div className="absolute right-0 top-7 text-[20px] font-medium">만원</div>
          <div className="mt-[2px] flex w-full justify-end text-subtitle3 text-gray-800">0만원</div>
        </div>
        <div className="relative">
          <label className="text-gray-800 text-subtitle2">월세</label>
          <input
            className="w-full appearance-none border-b-[2px] border-gray-500-alternative bg-transparent py-2 text-[20px] font-medium outline-none"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value)}
          />
          <div className="absolute right-0 top-7 text-[20px] font-medium">만원</div>
          <div className="mt-[2px] flex w-full justify-end text-subtitle3 text-gray-800">0만원</div>
        </div>
      </div>

      <div className="absolute w-full px-5 transform -translate-x-1/2 bottom-3 left-1/2">
        <Button onClick={onNext} disabled={deposit === "0" || monthlyRent === "0"}>
          결과 확인하기
        </Button>
      </div>
    </div>
  );
};

export default BudgetStep;
