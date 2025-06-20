import React, { useState } from "react";
import { Button } from "../ui/button";
import FilterOptionCard from "./FilterOptionCard";

interface OptionSelectStepProps {
  onNext: () => void;
  title: string;
  options: string[];
  multiSelect?: boolean;
  savedOptions: string[];
  onOptionsChange: (options: string[]) => void;
}

const OptionSelectStep = ({
  onNext,
  title,
  options,
  multiSelect = true,
  savedOptions,
  onOptionsChange,
}: OptionSelectStepProps) => {
  const [selectedOption, setSelectedOption] = useState<string[]>(savedOptions || []);

  const handleSelect = (option: string) => {
    if (multiSelect) {
      setSelectedOption((prev) =>
        prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
      );
    } else {
      setSelectedOption((prev) => (prev.includes(option) ? [] : [option]));
    }
  };
  return (
    <div className="flex h-full flex-col gap-5">
      <h1 className="text-title5">원하는 {title}를 선택해주세요</h1>
      <div className="flex flex-col gap-[10px]">
        {multiSelect ? (
          <div className="flex justify-end text-body2 text-gray-800">중복 선택 가능</div>
        ) : (
          <div className="h-5" />
        )}
        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <FilterOptionCard
              key={option}
              option={option}
              selectedCards={selectedOption}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 transform px-5">
        <Button
          onClick={() => {
            onOptionsChange(selectedOption);
            onNext();
          }}
          disabled={selectedOption.length === 0}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OptionSelectStep;
