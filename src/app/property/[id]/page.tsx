// page.tsx
"use client";

import { useState } from "react";
import PropertyDetailTab from "./PropertyDetailTab";
import PropertyReviewTab from "./PropertyReviewTab";

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [tab, setTab] = useState<"detail" | "review">("detail");

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 ${tab === "detail" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setTab("detail")}
        >
          상세 정보
        </button>
        <button
          className={`flex-1 py-2 ${tab === "review" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setTab("review")}
        >
          리뷰
        </button>
      </div>

      {/* 탭 내용 */}
      {tab === "detail" ? (
        <PropertyDetailTab id={params.id} />
      ) : (
        <PropertyReviewTab id={params.id} />
      )}
    </div>
  );
}
