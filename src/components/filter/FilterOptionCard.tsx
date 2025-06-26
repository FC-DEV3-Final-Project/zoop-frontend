import clsx from "clsx";
import React from "react";
import Image from "next/image";

interface FilterOptionCardProps {
  option: string;
  selectedCards: string[];
  onSelect: (option: string) => void;
}

const FilterOptionCard = ({ option, selectedCards, onSelect }: FilterOptionCardProps) => {
  const isSelected = selectedCards.includes(option);

  return (
    <button
      key={option}
      onClick={() => onSelect(option)}
      className={clsx(
        "relative flex items-center justify-between rounded-[8px] px-5 py-4 text-subtitle1 shadow-selectCard",
        isSelected ? "bg-blue-50" : "bg-white",
      )}
    >
      {option}
      <Image
        src={isSelected ? "/icons/check-on.svg" : "/icons/check-off.svg"}
        alt={isSelected ? "선택됨" : "미선택"}
        width={28}
        height={28}
      />
    </button>
  );
};

export default FilterOptionCard;
