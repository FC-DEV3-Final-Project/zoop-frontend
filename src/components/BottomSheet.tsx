import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface BottomSheetItem {
  label: string;
  value: string;
}

interface BottomSheetProps {
  trigger: React.ReactNode;
  title: string;
  items: BottomSheetItem[];
  onSelect: (item: BottomSheetItem | null) => void;
  selectedValue?: string;
  toggleable?: boolean;
}

const BottomSheet = ({
  trigger,
  title,
  items,
  onSelect,
  selectedValue,
  toggleable = false,
}: BottomSheetProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleSelect = (item: BottomSheetItem) => {
    const isSelected = item.value === selectedValue;
    onSelect(isSelected ? null : item);
    setOpen(false);
  };

  const handleOnlySelect = (item: BottomSheetItem) => {
    onSelect(item);
    setOpen(false);
  };

  const handleClick = toggleable ? handleToggleSelect : handleOnlySelect;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent
        side="bottom"
        className="absolute mx-auto h-auto w-full max-w-[600px] rounded-t-xl bg-white"
      >
        <SheetHeader className="items-center gap-0 pt-[14px]">
          <SheetTitle className="flex h-[40px] items-center justify-center text-body1">
            {title}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col">
          {items.map((item) => {
            const isSelected = item.value === selectedValue;
            return (
              <button
                className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 ${isSelected ? "bg-gray-200" : ""} hover:bg-gray-200`}
                key={item.value}
                onClick={() => handleClick(item)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomSheet;
