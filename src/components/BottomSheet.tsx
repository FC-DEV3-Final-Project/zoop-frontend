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
}

const BottomSheet = ({ trigger, title, items }: BottomSheetProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-body1 flex h-[40px] items-center justify-center">
              {title}
            </SheetTitle>
          </SheetHeader>

          <div className="flex h-[110px] flex-col">
            {items.map((item) => (
              <button
                className="text-body1 flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left hover:bg-[#F4F4F4]"
                key={item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BottomSheet;
