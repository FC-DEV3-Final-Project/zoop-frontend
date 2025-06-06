"use client";

import { useState, use } from "react";
import { Tab } from "@/components/Tab";
import DetailTab from "./components/detail/DetailTab";
import ReviewTab from "./components/review/ReviewTab";
import ImageCarousel from "./components/ImageCarousel";

const TAB_OPTIONS = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

export default function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedTab, setSelectedTab] = useState("detail");

  return (
    <>
      {/* 이미지 캐러셀은 상세 정보 탭에서만 보여줌 */}
      {selectedTab === "detail" && <ImageCarousel />}

      {/* 탭 고정 */}
      <Tab tabOptions={TAB_OPTIONS} selected={selectedTab} onChange={setSelectedTab} />

      {/* 탭 콘텐츠 */}
      <div>
        {selectedTab === "detail" && <DetailTab id={id} />}
        {selectedTab === "review" && <ReviewTab id={id} />}
      </div>
    </>
  );
}
