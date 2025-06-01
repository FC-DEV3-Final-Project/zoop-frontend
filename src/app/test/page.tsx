"use client";

import {useState} from "react";
import {Tab} from "@/components/Tab";

const tabItems = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

const tabItems2 = [
  { label: "월세", value: "one" },
  { label: "전세", value: "two" },
  { label: "매매", value: "three" },
];

export default function Test() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].value); // 항상 첫 번째 탭이 활성화된 채로 켜지길 원한다면,,

  return (
    <>
      <Tab
        tabOptions={tabItems}
        selected={selectedTab}
        onChange={setSelectedTab}
        />
      <div className="mt-4 text-body1">
        {selectedTab === "detail" && <p>상세 정보 내용입니다.</p>}
        {selectedTab === "review" && <p>리뷰 내용입니다.</p>}
      </div>
      <Tab
        tabOptions={tabItems2}
        selected={selectedTab}
        onChange={setSelectedTab}
        />
      <div className="mt-4 text-body1">
        {selectedTab === "one" && <p>월세</p>}
        {selectedTab === "two" && <p>전세</p>}
        {selectedTab === "three" && <p>매매</p>}
      </div>

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
    </>
  );
}
