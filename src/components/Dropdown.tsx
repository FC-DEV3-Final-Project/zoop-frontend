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
    <div ref={dropdownRef} className="relative inline-block">
      {/* 아이콘 버튼 */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer border border-black"
      >
        <img src="/icons/more.svg" alt="드롭다운 버튼" className="h-5 w-5" />
      </button>

      {/* 드롭다운 리스트 */}
      {open && (
        <ul className="absolute mt-2 min-w-[100px] rounded-md border border-black bg-white">
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => {
                onSelect(item);
                setOpen(false); // 선택 후 닫기
              }}
              className="cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
