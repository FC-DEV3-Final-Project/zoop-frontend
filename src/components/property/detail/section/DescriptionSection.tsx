"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import { useDescriptionQuery } from "@/queries/property/detail/useDescriptionQuery";
import DetailActionButton from "@/components/property/detail/DetailActionButton";

const DescriptionSection = forwardRef<HTMLElement, { propertyId: number }>(
  ({ propertyId }, ref) => {
    const { data, isLoading, error } = useDescriptionQuery(propertyId);

    const textRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
      const el = textRef.current;
      if (!el) return;

      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxHeight = lineHeight * 2;

      if (el.scrollHeight > maxHeight + 1) {
        setIsOverflowing(true);
      }
    }, [data]);

    if (isLoading || error || !data) return null;

    return (
      <section
        ref={ref}
        id="description"
        className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
      >
        <div className="mb-5 text-title2 text-black">상세설명</div>

        <div className="mb-4 text-caption1 text-black">{data.articleFeatureDescription}</div>

        <div
          ref={textRef}
          className={`whitespace-pre-line text-body2 text-black transition-all ${
            isExpanded ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {data.detailDescription}
        </div>

        {isOverflowing && (
          <div className="mt-8">
            <DetailActionButton
              label={
                <div className="flex items-center justify-center">
                  <span>{isExpanded ? "접기" : "전체 설명 보기"}</span>
                  <img
                    src={isExpanded ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"}
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                </div>
              }
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          </div>
        )}
      </section>
    );
  },
);

export default DescriptionSection;
