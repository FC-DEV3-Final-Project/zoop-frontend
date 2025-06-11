import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface BottomSheetProps {
  trigger: React.ReactNode;
  title: string;
  children: (close: () => void) => React.ReactNode;
}

const BottomS = ({ trigger, title, children }: BottomSheetProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>

      <SheetContent
        side="bottom"
        aria-describedby={undefined}
        className="sticky mx-auto w-full max-w-[600px] rounded-t-xl bg-white"
      >
        <SheetHeader className="items-center gap-0 pt-[14px]">
          <SheetTitle className="flex h-[40px] items-center justify-center text-body1">
            {title}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col">{children(() => setOpen(false))}</div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomS;
