"use client";

import EnvironmentTabs from "./EnvironmentTabs";

interface ReviewTabProps {
  id: string;
}

export default function ReviewTab({ id }: { id: string }) {
  return (
    <div className="flex flex-col gap-6 bg-white p-5">
      <div className="text-title3 text-black">방배마에스트로(주상복합) 아파트</div>
      <div className="flex flex-col gap-4">
        <div className="text-subtitle2 text-black">AI 리뷰 분석</div>
        <div className="flex w-full flex-row justify-between gap-[14px]">
          {/* 왼쪽: 점수 + 별 */}
          <div className="flex basis-1/2 flex-col items-center gap-3 px-2 py-[10px]">
            <div className="mb-[12px] w-full text-center text-largeTitle text-black">4.46</div>
            <div className="flex">
              <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
              <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
              <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
              <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
              <img src="/icons/star-unfilled.svg" alt="unfilled-star" width={24} height={24} />
            </div>
          </div>

          {/* 오른쪽: 그래프 */}
          <div className="flex basis-1/2 flex-col justify-center gap-2 px-2">
            {["교통 환경", "주거 환경", "교육 환경", "주변 시설"].map((label, i) => (
              <div key={i} className="flex items-center gap-[7px]">
                <span className="shrink-0 whitespace-nowrap text-right text-body3 text-black">
                  {label}
                </span>
                <div className="h-[6px] w-full rounded-full bg-blue-100">
                  <div
                    className="h-full rounded-full bg-blue-800-primary"
                    style={{ width: ["100%", "85%", "90%", "100%"][i] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <EnvironmentTabs />
      </div>
    </div>
  );
}
