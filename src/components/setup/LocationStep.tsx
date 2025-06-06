import React from "react";
import { Button } from "../ui/button";

interface LocationStepProps {
  onNext: () => void;
}

const LocationStep = ({ onNext }: LocationStepProps) => {
  return (
    <div>
      <h1 className="text-[22px] font-medium">원하는 지역을 알려주세요</h1>
      <input
        className="w-full appearance-none border-b-[1px] border-gray-500 bg-transparent pb-2 outline-none placeholder:text-[20px]"
        placeholder="지역, 지하철역, 단지, 건물명을 검색"
      />

      <Button onClick={onNext}>다음</Button>
    </div>
  );
};

export default LocationStep;
