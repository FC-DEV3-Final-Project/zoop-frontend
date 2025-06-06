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
        <EnvironmentTabs />
      </div>
    </div>
  );
}
