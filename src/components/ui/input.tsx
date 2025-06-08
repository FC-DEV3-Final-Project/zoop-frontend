import React from "react";
import { cn } from "@/lib/utils";

type InputStyleSize = "basic" | "small";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text";
  styleSize: InputStyleSize;
  placeholder: string;
  icon?: React.ReactNode;
}

export default function Input({ styleSize, icon, placeholder, className }: InputProps) {
  const baseStyle = cn(
    "flex items-center",
    "w-full rounded-[8px] bg-gray-200",
    "placeholder-[#778292]",
    "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1", // 포커스 스타일
    "disabled:cursor-not-allowed disabled:opacity-50",
    "px-[12px]",
    className,
  );

  const sizeClasses: Record<InputStyleSize, string> = {
    small: "text-[14px] py-[6px]",
    basic: "text-[16px] py-[12px]  pr-[40px]",
  };

  const combinedClassName = cn(baseStyle, sizeClasses[styleSize], className);

  return (
    <div className="relative w-full">
      <input type="text" className={combinedClassName} placeholder={placeholder} />
      <div
        className="text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => console.log("아이콘 클릭됨")}
      >
        {icon}
      </div>
    </div>
  );
}
