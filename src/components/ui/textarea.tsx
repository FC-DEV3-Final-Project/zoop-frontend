import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface AutoResizeTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

export default function AutoResizeTextarea({
  placeholder,
  className,
  value,
  onChange,
  onSend,
}: AutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const baseStyle = cn(
    "w-[270px] max-h-[160px] rounded-lg bg-gray-200 pl-9 pr-3 py-[6px]",
    "placeholder-gray-800",
    "text-subtitle3 resize-none overflow-y-auto",
    "focus-visible:outline-none focus-visible:ring-0",
    className,
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend?.();
    }
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // 높이 초기화
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`; // 최대 160px까지
    }
  };

  return (
    <div className="relative w-full">
      <img
        src="/icons/search.svg"
        className="pointer-events-none absolute left-3 top-3 h-5 w-5"
        alt="검색 아이콘"
      />
      <textarea
        ref={textareaRef}
        className={baseStyle}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e);
          handleInput();
        }}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        rows={1}
      />
    </div>
  );
}
