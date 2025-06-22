import React from "react";
import BottomSheet from "../common/BottomSheet";

interface sortOptions {
  label: string;
  value: string;
}

interface SortFilterProps {
  sortOptions: sortOptions[];
  selectedText: sortOptions | null;
  onSelect: (item: sortOptions) => void;
}

const SortFilter = ({ sortOptions, selectedText, onSelect }: SortFilterProps) => {
  return (
    <BottomSheet
      trigger={
        <button className="flex h-7 w-max cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1 text-body2">
          {selectedText?.label ?? "AI추천 순"}
          <img src="/icons/arrow-down.svg" alt="화살표" className="h-3 w-3" />
        </button>
      }
      title="정렬 방식"
    >
      {(close) =>
        sortOptions.map((item) => {
          const isSelected = item.value === selectedText?.value;
          return (
            <button
              key={item.value}
              className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200 ${
                isSelected ? "bg-gray-200 text-subtitle2" : ""
              }`}
              onClick={() => {
                console.log("선택된 항목:", item);
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
