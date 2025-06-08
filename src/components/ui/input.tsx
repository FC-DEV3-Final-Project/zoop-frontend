import React from "react";
import { cn } from "@/lib/utils";

type InputStyleSize = "basic" | "small";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styleSize: InputStyleSize;
  placeholder: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export default function Input({
  styleSize,
  icon,
  placeholder,
  className,
  value,
  onChange,
  onSend,
}: InputProps) {
  const baseStyle = cn(
    "flex items-center",
    "w-full rounded-lg bg-gray-200",
    "placeholder-gray-800",
    "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1", // 포커스 스타일
    "disabled:cursor-not-allowed disabled:opacity-50",
    "px-3",
    className,
  );

  const sizeClasses: Record<InputStyleSize, string> = {
    small: "text-body2 py-[6px]",
    basic: "text-subtitle3 py-3 pr-10",
  };

  const combinedClassName = cn(baseStyle, sizeClasses[styleSize], className);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend?.();
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className={combinedClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      {icon && (
        <button
          type="button"
          onClick={onSend}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {icon}
        </button>
      )}
    </div>
  );
}
