import clsx from "clsx";
import React, { ReactNode } from "react";

interface ChatBubbleProps {
  children: ReactNode;
  className?: string;
}

const ChatBubble = ({ children, className }: ChatBubbleProps) => {
  return (
    <span
      className={clsx(
        "inline-block w-3/4 break-words rounded-[2px_16px_16px_16px] border border-gray-200 bg-white p-4 text-caption2",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default ChatBubble;
