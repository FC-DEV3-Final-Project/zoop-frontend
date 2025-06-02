"use client";
import BottomSheet from "@/components/BottomSheet";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Test() {
  const [bottomSheetValue, setBottomSheetValue] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-1 p-8">
      <p className="text-largeTitle">Large Title 텍스트</p>
      <p className="text-title1">Title 1 텍스트</p>
      <p className="text-title2">Title 2 텍스트</p>
      <p className="text-title3">Title 3 텍스트</p>
      <p className="text-title4">Title 4 텍스트</p>
      <p className="text-subtitle1">Subtitle 1 텍스트</p>
      <p className="text-subtitle2">Subtitle 2 텍스트</p>
      <p className="text-subtitle3">Subtitle 3 텍스트</p>
      <p className="text-subtitle4">Subtitle 4 텍스트</p>
      <p className="text-body1">Body 1 텍스트</p>
      <p className="text-body2">Body 2 텍스트</p>
      <p className="text-body3">Body 3 텍스트</p>
      <p className="text-caption1">Caption 1 텍스트</p>
      <p className="text-caption2">Caption 2 텍스트</p>
      <p className="text-caption3">Caption 3 텍스트</p>
      <p className="text-footnote">Footnote 텍스트</p>
      {/* 버튼을 trigger로 넘기면 해당 버튼 클릭 시 바텀시트가 열립니다. */}
      선택된 값 확인하기: {bottomSheetValue}
      <BottomSheet
        trigger={
          <button className="flex cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1">
            가격순
            <ChevronDown className="h-3 w-3" />
          </button>
        }
        title="정렬 방식"
        items={[
          { label: "가격 높은 순", value: "high" },
          { label: "낮은 가격 순", value: "low" },
        ]}
        onSelect={setBottomSheetValue}
      />
    </div>
  );
}
