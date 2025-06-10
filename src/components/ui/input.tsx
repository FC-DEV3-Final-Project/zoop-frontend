import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export default function Input({ placeholder, className, value, onChange, onSend }: InputProps) {
  const baseStyle = cn(
    "w-[270px] rounded-lg bg-gray-200",
    "placeholder-gray-800",
    "text-body2 py-[6px] px-3",
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
      <input
        type="text"
        className={baseStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
