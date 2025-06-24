import React from "react";
import BottomSheet from "../common/BottomSheet";

interface SortOption {
  label: string;
  value: string;
}

const sortOptions: SortOption[] = [
  { label: "가격 높은 순", value: "high" },
  { label: "가격 낮은 순", value: "low" },
  { label: "면적 넓은 순", value: "wide" },
  { label: "면적 좁은 순", value: "narrow" },
];

interface SortFilterProps {
  selectedOption: SortOption | null;
  onSelect: (item: SortOption) => void;
}

const SortFilter = ({ selectedOption, onSelect }: SortFilterProps) => {
  return (
    <BottomSheet
      trigger={
        <button className="flex h-7 w-max cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1 text-body2">
          {selectedOption?.label ?? "가격/면적순"}
          <img src="/icons/arrow-down.svg" alt="화살표" className="h-3 w-3" />
        </button>
      }
      title="정렬 방식"
    >
      {(close) =>
        sortOptions.map((item) => {
          const isSelected = item.value === selectedOption?.value;
          return (
            <button
              key={item.value}
              className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200 ${
                isSelected ? "bg-gray-200 text-subtitle2" : ""
              }`}
              onClick={() => {
                onSelect(item);
                close();
              }}
            >
              {item.label}
            </button>
          );
        })
      }
    </BottomSheet>
  );
};

export default SortFilter;
