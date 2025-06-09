import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  value: string;
  label: string;
}

interface DropdownProps {
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

const Dropdown = ({ items, onSelect }: DropdownProps) => {
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
    <div ref={dropdownRef} className="relative">
      {/* 아이콘 버튼 */}
      <button onClick={() => setOpen((prev) => !prev)} className="flex cursor-pointer">
        <img src="/icons/more.svg" alt="드롭다운 버튼" className="h-[18px] w-[18px]" />
      </button>

      {/* 드롭다운 리스트 */}
      {open && (
        <ul className="absolute rounded-lg border border-gray-300 bg-gray-100/90">
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isOnlyOne = items.length === 1;

            return (
              <li
                key={item.value}
                onClick={() => {
                  onSelect(item);
                  setOpen(false);
                }}
                className={cn(
                  "cursor-pointer px-[12px] py-[8px] text-[13px] font-normal leading-[150%] hover:text-blue-600",
                  isFirst && !isOnlyOne && "border-grat-300 border-b",
                )}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
