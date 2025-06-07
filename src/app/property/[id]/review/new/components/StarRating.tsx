"use client";

import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0); // 0 ~ 5

  return (
    <div className="flex items-center justify-between">
      {/* 별 5개 */}
      <div className="flex gap-[4px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <button key={i} type="button" onClick={() => setRating(i + 1)}>
            <img
              src={i < rating ? "/icons/star-filled.svg" : "/icons/star-unfilled.svg"}
              alt={i < rating ? "filled-star" : "unfilled-star"}
              width={32}
              height={32}
            />
          </button>
        ))}
      </div>

      {/* 점수 텍스트 */}
      <span className="text-title3 text-black">{rating.toFixed(1)}</span>
    </div>
  );
}
