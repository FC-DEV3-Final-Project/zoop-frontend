import React, { useState } from "react";
import { Button } from "../ui/button";
import SelectCard from "../common/SelectCard";

interface OptionSelectStepProps {
  onNext: () => void;
  title: string;
  options: string[];
}

const OptionSelectStep = ({ onNext, title, options }: OptionSelectStepProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex h-full flex-col gap-5">
      <h1 className="text-title5">원하는 {title}를 선택해주세요.</h1>
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-end text-body2 text-gray-800">중복 선택 가능</div>
        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <SelectCard
              key={option}
              option={option}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 transform px-5">
        <Button onClick={onNext} disabled={selected.length === 0}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OptionSelectStep;
