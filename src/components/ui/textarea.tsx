import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AutoResizeTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

export default function Ttextarea({
  placeholder,
  className,
  value,
  onChange,
  onSend,
}: AutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const baseStyle = cn(
    "w-full resize-none bg-transparent",
    "text-subtitle3 placeholder-gray-800",
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
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 160);
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = textarea.scrollHeight > 160 ? "auto" : "hidden";
    }
  };

  useEffect(() => {
    handleInput(); // 초기에도 높이 맞춰줌
  }, [value]);

  return (
    <div className="flex w-full items-start gap-2 rounded-lg bg-gray-200 p-3">
      <textarea
        ref={textareaRef}
        className={baseStyle}
        style={{ height: "auto", maxHeight: "160px", overflowY: "auto" }}
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
      <button
        className="flex-shrink-0"
        onClick={value.length === 0 ? () => alert("음성 입력 버튼") : undefined}
      >
        <img
          src="/icons/unmute.svg"
          className={cn("mt-1 h-5 w-5", value.length > 0 && "invisible")}
          alt="음성 입력 아이콘"
        />
      </button>
    </div>
  );
}
