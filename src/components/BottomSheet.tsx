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
            <div className="flex h-[48px] items-center justify-center hover:bg-[#F4F4F4]">
              <button className="text-body1 text-center">가격 높은 순</button>
            </div>
            <div className="flex h-[48px] items-center justify-center hover:bg-[#F4F4F4]">
              <button className="text-body1 text-center text-right">가격 낮은 순</button>
            </div>
            <div className="flex-1" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BottomSheet;
