"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AlertProps {
  title: string;
  description: string;
  trigger?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Alert({
  title,
  description,
  trigger,
  onConfirm,
  confirmLabel = "확인",
  cancelLabel = "취소",
  open,
  onOpenChange,
}: AlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent
        className={cn(
          "w-[calc(100%-40px)] max-w-[335px] p-5",
          "rounded-[16px] border border-[#DDE0E4] bg-[#F8F8F8]",
          "shadow-[10px_10px_20px_rgba(0,0,0,0.08)]",
        )}
      >
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-center text-subtitle1 text-black">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-body1 text-black">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex flex-row justify-between gap-[10px]">
          <AlertDialogCancel className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-[#EDEEF0] px-5 py-[14px] text-title4 text-black">
            {cancelLabel}
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-blue-800-primary px-5 py-[14px] text-title4 text-white hover:bg-[#002EDD]"
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
