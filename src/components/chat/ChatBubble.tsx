import clsx from "clsx";
import React, { ReactNode } from "react";

interface ChatBubbleProps {
  children: ReactNode;
  className?: string;
  type: "CHATBOT" | "USER";
}

const ChatBubble = ({ children, className, type }: ChatBubbleProps) => {
  return (
    <div
      className={clsx(
        "w-fit max-w-[75%] break-words p-4 text-caption2",
        type === "USER"
          ? "bg-blue-050 justify-end rounded-[16px_2px_16px_16px] border border-blue-100 bg-blue-050-bg"
          : "rounded-[2px_16px_16px_16px] border border-gray-200 bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ChatBubble;
