"use client";

import { useState } from "react";
import { Tab } from "@/components/Tab";
import PropertyDetailTab from "./PropertyDetailTab";
import PropertyReviewTab from "./PropertyReviewTab";
import PropertyImageCarousel from "./PropertyImageCarousel";

const TAB_OPTIONS = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [selectedTab, setSelectedTab] = useState("detail");

  return (
    <>
      {/* 이미지 캐러셀은 상세 정보 탭에서만 보여줌 */}
      {selectedTab === "detail" && <PropertyImageCarousel />}

      {/* 탭 고정 */}
      <Tab tabOptions={TAB_OPTIONS} selected={selectedTab} onChange={setSelectedTab} />

      {/* 탭 콘텐츠 */}
      <div className="mt-4 px-4">
        {selectedTab === "detail" && <PropertyDetailTab id={params.id} />}
        {selectedTab === "review" && <PropertyReviewTab id={params.id} />}
      </div>
    </>
  );
}
