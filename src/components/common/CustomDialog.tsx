"use client";

import * as React from "react";
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
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface AlertProps {
  title: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
  trigger?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirm: (value?: string) => void;
}

export default function CustomDialog({
  title,
  description,
  placeholder,
  defaultValue = "",
  maxLength = 100,
  trigger,
  confirmLabel = "확인",
  cancelLabel = "취소",
  open,
  onOpenChange,
  onConfirm,
}: AlertProps) {
  const hasInput = typeof placeholder === "string";
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const descId = React.useId();

  React.useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}

      <AlertDialogContent
        aria-describedby={hasInput ? descId : undefined}
        className={cn(
          "w-[calc(100%-40px)] max-w-[335px] p-5",
          "rounded-[16px] border border-[#DDE0E4] bg-[#F8F8F8]",
          "shadow-[10px_10px_20px_rgba(0,0,0,0.08)]",
          "flex flex-col gap-5",
        )}
      >
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-subtitle1 text-black">{title}</AlertDialogTitle>
          {!hasInput && description && (
            <AlertDialogDescription id={descId} className="text-center text-body1 text-black">
              {description}
            </AlertDialogDescription>
          )}
          {hasInput && (
            <input
              id={descId}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxLength={maxLength}
              placeholder={placeholder}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-[14px] text-subtitle2 text-black placeholder-gray-700-info focus:border-black focus:outline-none"
            />
          )}
        </AlertDialogHeader>

        <AlertDialogFooter className="flex flex-row justify-between gap-[10px]">
          <AlertDialogCancel
            onClick={(e) => e.stopPropagation()}
            className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-gray-300 px-5 py-[14px] text-subtitle2 text-black"
          >
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.stopPropagation();
              onConfirm(hasInput ? inputValue : undefined);
            }}
            className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-blue-800-primary px-5 py-[14px] text-subtitle2 text-gray-50 hover:bg-[#002EDD]"
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
