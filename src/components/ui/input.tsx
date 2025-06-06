import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          data-slot="input"
          // className={cn(
          //   "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          //   "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          //   className,
          // )}
          className={cn(
            // 오른쪽 아이콘 공간 확보
            "border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-10 w-full rounded-md border px-3 py-2 pr-10 text-sm shadow-sm transition focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            // 포커스, 유효성 스타일
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className,
          )}
          {...props}
        />
        <div
          className="text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => console.log("아이콘 클릭됨")}
        >
          {icon}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input"; //디버깅용 이름
export { Input };
