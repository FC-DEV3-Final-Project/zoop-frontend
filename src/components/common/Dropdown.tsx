import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DropdownItemType = "edit" | "delete";

const ICONS: Record<DropdownItemType, React.ReactNode> = {
  edit: <img src="/icons/write.svg" alt="편집하기" className="h-[18px] w-[18px]" />,
  delete: <img src="/icons/trash.svg" alt="삭제하기" className="h-4[18px] w-[18px]" />,
};

interface DropdownProps {
  items: {
    type: DropdownItemType;
    label: string;
    onClick: () => void;
  }[];
  position?: "left" | "right";
  className?: string;
}

const Dropdown = ({ items, position = "right", className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cn("relative w-fit", className)}>
      <button onClick={() => setOpen((prev) => !prev)} className="flex cursor-pointer">
        <img src="/icons/more.svg" alt="드롭다운 버튼" className="h-[18px] w-[18px]" />
      </button>

      {open && (
        <div
          className={cn(
            "absolute z-10 w-max rounded-lg border border-gray-300 bg-gray-100/90",
            position === "right" ? "right-0" : "left-0", // 👈 간단하게 위치 제어
          )}
        >
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isOnlyOne = items.length === 1;
            const isDelete = item.type === "delete";
            const icon = ICONS[item.type];

            return (
              <button
                key={item.type}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
                className={cn(
                  "flex items-center gap-[7px] px-[12px] py-[8px]",
                  "cursor-pointer text-body2",
                  isFirst && !isOnlyOne && "border-b border-gray-300",
                )}
              >
                <span className={isDelete ? "text-blue-600" : "text-black"}>{item.label}</span>
                <span className={isDelete ? "text-blue-600" : "text-gray-300"}>{icon}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
