import clsx from "clsx";
import React from "react";
import Image from "next/image";

interface SelectCardProps {
  option: string;
  selectedCards: string[];
  setSelectedCards: (option: string[]) => void;
}

const SelectCard = ({ option, selectedCards, setSelectedCards }: SelectCardProps) => {
  const isSelected = selectedCards.includes(option);

  return (
    <button
      key={option}
      onClick={() =>
        setSelectedCards(
          selectedCards.includes(option)
            ? selectedCards.filter((item) => item !== option)
            : [...selectedCards, option],
        )
      }
      className={clsx(
        "shadow-selectCard relative flex h-16 items-center justify-start rounded-[8px] pl-5 pr-4 text-subtitle1",
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

export default SelectCard;
