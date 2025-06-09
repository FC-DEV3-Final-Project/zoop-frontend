import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DropdownItemType = "edit" | "delete";

const DefaultSetting: Record<
  DropdownItemType,
  {
    icon: React.ReactNode;
    onClick: () => void;
  }
> = {
  edit: {
    icon: <img src="/icons/write.svg" alt="편집하기" className="h-[18px] w-[18px]" />,
    onClick: () => {
      console.log("편집하기 클릭");
    },
  },
  delete: {
    icon: <img src="/icons/trash.svg" alt="삭제하기" className="h-4[18px] w-[18px]" />,
    onClick: () => {
      console.log("삭제 클릭");
    },
  },
};

interface DropdownProps {
  items: {
    type: DropdownItemType;
    label: string;
  }[];
}

const Dropdown = ({ items }: DropdownProps) => {
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
    <div ref={dropdownRef} className="relative w-fit">
      <button onClick={() => setOpen((prev) => !prev)} className="flex cursor-pointer">
        <img src="/icons/more.svg" alt="드롭다운 버튼" className="h-[18px] w-[18px]" />
      </button>

      {open && (
        <div className="absolute z-10 w-max rounded-lg border border-gray-300 bg-gray-100/90">
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isOnlyOne = items.length === 1;

            const base = DefaultSetting[item.type];
            const isDelete = item.type === "delete";

            return (
              <button
                key={item.type}
                onClick={() => {
                  base.onClick();
                  setOpen(false);
                }}
                className={cn(
                  "flex items-center gap-[7px] px-[12px] py-[8px]",
                  "cursor-pointer text-[13px]",
                  isFirst && !isOnlyOne && "border-b border-gray-300",
                )}
              >
                <span className={isDelete ? "text-blue-600" : "text-black"}>{item.label}</span>
                <span className={isDelete ? "text-blue-600" : "text-gray-300"}>{base.icon}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
