import React, { useState } from "react";
import SelectCard from "../common/SelectCard";
import { Button } from "../ui/button";

const HOUSING_OPTIONS = ["원룸 / 투룸", "빌라", "오피스텔", "아파트"];

interface HousingTypeStepProps {
  onNext: () => void;
}

const HousingTypeStep = ({ onNext }: HousingTypeStepProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div>
      <h1 className="text-[22px] font-medium">원하는 주거 형태를 알려주세요</h1>
      <div className="mb-[10px] flex justify-end text-body2">중복 선택 가능</div>
      <div className="flex flex-col gap-4">
        {HOUSING_OPTIONS.map((option) => (
          <SelectCard key={option} option={option} selected={selected} setSelected={setSelected} />
        ))}
      </div>
      <Button onClick={onNext}>다음</Button>
    </div>
  );
};

export default HousingTypeStep;
