import clsx from "clsx";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SelectCard from "../common/SelectCard";

const TRANSACTION_OPTIONS = ["월세", "전세", "매매"];

interface TransactionTypeStepProps {
  onNext: () => void;
}

const TransactionTypeStep = ({ onNext }: TransactionTypeStepProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div>
      <h1 className="text-[22px] font-medium">원하는 매매 형태를 알려주세요</h1>
      <div className="mb-[10px] flex justify-end text-body2">중복 선택 가능</div>
      <div className="flex flex-col gap-4">
        {TRANSACTION_OPTIONS.map((option) => (
          <SelectCard key={option} option={option} selected={selected} setSelected={setSelected} />
        ))}
      </div>
      <Button onClick={onNext}>다음</Button>
    </div>
  );
};

export default TransactionTypeStep;
