import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import ClearIcon from "../../../public/icons/close.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
}

export default function Input({
  placeholder,
  className,
  value,
  onChange,
  onSend,
  onFocus,
  onBlur,
  onClear,
}: InputProps) {
  const baseStyle = cn(
    "w-full rounded-lg bg-gray-200 pl-9",
    "placeholder-gray-800",
    "text-subtitle3 py-[6px] pr-3",
    "focus-visible:outline-none focus-visible:ring-0", // 포커스 스타일 제거
    className,
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend?.();
    }
  };

  return (
    <div className="relative w-full">
      <img src="/icons/search.svg" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
      <input
        type="text"
        className={baseStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
      />
      {value.length > 0 && (
        <button onClick={onClear} className="absolute right-3 top-1/2 -translate-y-1/2">
          <Image src={ClearIcon} alt={"clear"} />
        </button>
      )}
    </div>
  );
}
