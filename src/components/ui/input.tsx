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
