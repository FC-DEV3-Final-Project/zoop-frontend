"use client";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-t-gray-300 bg-white px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-24 rounded-md" />
        </div>
        <Skeleton className="h-4 w-5 rounded-md" />
      </div>

      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[60%]" />

      <div className="mt-2 flex items-center justify-between">
        <Skeleton className="h-4 w-14 rounded-md" />
        <Skeleton className="h-3 w-20 rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonCard;
