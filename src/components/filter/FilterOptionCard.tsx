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
        "relative flex h-16 items-center justify-start rounded-[8px] pl-5 pr-4 text-subtitle1 shadow-selectCard",
        isSelected ? "bg-blue-100" : "bg-white",
      )}
    >
      {option}
      <span className="absolute right-4">
        <Image
          src={isSelected ? "/icons/check-on.svg" : "/icons/check-off.svg"}
          alt={isSelected ? "선택됨" : "미선택"}
          width={28}
          height={28}
        />
      </span>
    </button>
  );
};

export default FilterOptionCard;
