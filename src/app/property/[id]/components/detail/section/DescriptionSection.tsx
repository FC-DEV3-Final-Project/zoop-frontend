"use client";

import { useEffect, useRef, useState } from "react";
import GrayButton from "../GrayButton";

export default function DescriptionSection() {
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
  }, []);

  return (
    <section id="description" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">상세설명</div>
      <div className="mb-4 text-caption1 text-black">
        [이수역] 방배 마에스트로 주상복합아파트(전세5억3천만원)
      </div>

      <div
        ref={textRef}
        className={`text-body2 text-black transition-all ${
          isExpanded ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        서초구 방배동 866-10 (서초대로 13) 방배마에스트로 아파트 - 이수역 도보 1분~2분 거리에 있는
        주상복합 아파트입니다.
      </div>

      {isOverflowing && (
        <div className="mt-8">
          <GrayButton
            label={
              <div className="flex items-center justify-center gap-2">
                <span>{isExpanded ? "접기" : "전체 설명 보기"}</span>
                <img
                  src={isExpanded ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"}
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </div>
            }
            onClick={() => setIsExpanded((prev) => !prev)}
          />
        </div>
      )}
    </section>
  );
}
