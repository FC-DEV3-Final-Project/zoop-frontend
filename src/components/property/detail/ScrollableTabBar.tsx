"use client";

import { useState } from "react";
import clsx from "clsx";

const tab_list = [
  { label: "거래정보", value: "deal" },
  { label: "매물정보", value: "info" },
  { label: "시설정보", value: "facility" },
  { label: "위치정보", value: "location" },
  { label: "상세설명", value: "description" },
  { label: "중개정보", value: "agent" },
];

const ScrollableTabBar = ({ onSelect }: { onSelect: (value: string) => void }) => {
  const [selected, setSelected] = useState("deal");

  const handleClick = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <div
      className="sticky top-[114px] z-10 w-full overflow-x-auto bg-white scrollbar-hide"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex w-[600px] max-w-full">
        {tab_list.map((tab) => {
          const isActive = selected === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => handleClick(tab.value)}
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
};

export default ScrollableTabBar;
