"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { useAutoScroll } from "@/hooks/property/useAutoScroll";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTabOnClick = useAutoScroll(scrollRef);

  const handleClick = (value: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(value);
    onSelect(value);
    scrollTabOnClick(e.currentTarget);
  };

  return (
    <div
      ref={scrollRef}
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
              onClick={(e) => handleClick(tab.value, e)}
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
