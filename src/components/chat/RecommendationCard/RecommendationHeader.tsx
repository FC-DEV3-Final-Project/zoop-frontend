"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import ArrowRight from "../../../../public/icons/arrow-right-gray.svg";

interface RecommendationHeaderProps {
  setIsMapOpen: (isMapOpen: boolean) => void;
}

const RecommendationHeader = ({ setIsMapOpen }: RecommendationHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between rounded-b-none rounded-t-2xl bg-blue-050-bg px-3 py-[10px]">
      <h1 className="text-subtitle4 text-blue-800-primary">AI 추천 매물</h1>
      <span className="flex items-center justify-center gap-1">
        <button
          onClick={() => setIsMapOpen(true)}
          className="flex items-center text-center text-body3 leading-none text-gray-800"
        >
          자세히 보기
        </button>
        <Image src={ArrowRight} alt="자세히 보기" />
      </span>
    </div>
  );
};

export default RecommendationHeader;
