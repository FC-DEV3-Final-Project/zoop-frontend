"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AutoResizeTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  disabled?: boolean;
}

export default function AutoResizeTextarea({
  placeholder,
  className,
  value,
  onChange,
  onSend,
  disabled,
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
      if (value.length > 0) onSend();
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
    handleInput();
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
        disabled={disabled}
      />
      <button className="flex-shrink-0" disabled={value.length === 0} onClick={onSend}>
        <img
          src="/icons/send.svg"
          className="mt-1 h-5 w-5 opacity-100 disabled:opacity-40"
          alt="전송 아이콘"
        />
      </button>
    </div>
  );
}
