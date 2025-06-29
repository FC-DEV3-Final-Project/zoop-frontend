import { ReactNode } from "react";

interface DetailActionButtonProps {
  label: ReactNode;
  onClick?: () => void;
  isToggle?: boolean;
  isExpanded?: boolean;
}

const DetailActionButton = ({
  label,
  onClick,
  isToggle = false,
  isExpanded = false,
}: DetailActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="h-[50px] w-full cursor-pointer rounded-small bg-gray-100 px-6 py-[9px] text-center text-caption2 text-black"
    >
      {isToggle ? (isExpanded ? "접기" : "전체 설명 보기") : label}
    </button>
  );
};

export default DetailActionButton;
