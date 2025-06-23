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
      setTimeout(() => {
        if (value.trim().length > 0) {
          onSend();
        }
      }, 0);
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

  const isSendable = value.trim().length > 0;

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
        disabled={!isSendable}
        onClick={onSend}
        aria-label="댓글 전송"
      >
        <img
          src={isSendable ? "/icons/send.svg" : "/icons/unsend.svg"}
          className={`mt-1 h-5 w-5 ${isSendable ? "opacity-100" : "opacity-40"}`}
          alt={isSendable ? "전송 가능" : "전송 불가"}
        />
      </button>
    </div>
  );
}
