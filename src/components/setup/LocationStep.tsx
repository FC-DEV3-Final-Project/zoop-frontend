import React from "react";
import { Button } from "../ui/button";
import SearchIcon from "../../../public/icons/search.svg";
import Image from "next/image";

interface LocationStepProps {
  onNext: () => void;
}

const LocationStep = ({ onNext }: LocationStepProps) => {
  return (
    <div className="relative flex h-full flex-col gap-5">
      <h1 className="text-[22px] font-medium">원하는 지역을 알려주세요</h1>
      <div className="relative">
        <input
          className="w-full appearance-none border-b-[1px] border-gray-500 bg-transparent pb-2 pt-2 outline-none placeholder:text-[20px]"
          placeholder="지역, 지하철역, 단지, 건물명을 검색"
        />
        <Image src={SearchIcon} alt="검색" className="absolute right-0 top-2" />
      </div>

      <div className="absolute bottom-4 w-full">
        <Button onClick={onNext}>다음</Button>
      </div>
    </div>
  );
};

export default LocationStep;
