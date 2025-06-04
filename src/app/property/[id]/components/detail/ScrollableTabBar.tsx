"use client";

import { useState } from "react";
import clsx from "clsx";

const TAB_LIST = [
  { label: "거래정보", value: "deal" },
  { label: "매물정보", value: "info" },
  { label: "위치정보", value: "location" },
  { label: "상세설명", value: "description" },
  { label: "실거래가", value: "price" },
  { label: "중개정보", value: "agent" },
];

export default function ScrollableTabBar() {
  const [selected, setSelected] = useState("deal");

  return (
    <div
      className="w-full overflow-x-auto bg-white scrollbar-hide"
      style={{
        scrollbarWidth: "none", // Firefox 대응
        msOverflowStyle: "none", // IE 대응 (의미 없다고 함..)
      }}
    >
      <div className="flex w-[600px] max-w-full">
        {TAB_LIST.map((tab) => {
          const isActive = selected === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setSelected(tab.value)}
              className={clsx(
                "w-[25%] min-w-[25%] whitespace-nowrap border-b-2 py-[18px] text-center",
                isActive
                  ? "border-blue-800-primary text-title4 text-blue-800-primary"
                  : "border-gray-400 text-subtitle3 text-gray-800",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
