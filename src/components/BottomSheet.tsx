import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface BottomSheetProps {
  trigger: React.ReactNode;
}

const BottomSheet = ({ trigger }: BottomSheetProps) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{trigger}</SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-body1 flex h-[40px] items-center justify-center">
              필터 설정
            </SheetTitle>
          </SheetHeader>

          <div className="flex h-[110px] flex-col">
            <button className="text-body1 flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left hover:bg-[#F4F4F4]">
              가격 높은 순
            </button>
            <button className="text-body1 flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left hover:bg-[#F4F4F4]">
              가격 낮은 순
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BottomSheet;
