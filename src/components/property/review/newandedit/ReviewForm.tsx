"use client";

import SelectButtonGroup from "@/components/property/review/newandedit/SelectButtonGroup";
import StarRating from "@/components/property/review/newandedit/StarRating";
import ReviewTextarea from "@/components/property/review/newandedit/ReviewTextarea";

interface ReviewFormProps {
  rating: number;
  content: string;
  residence: "current" | "past" | "none";
  hasChild: "none" | "yes";
  onChange: (field: "rating" | "content" | "residence" | "hasChild", value: any) => void;
}

const ReviewForm = ({ rating, content, residence, hasChild, onChange }: ReviewFormProps) => {
  return (
    <div className="flex flex-col gap-5 px-5 pb-[30px]">
      <div className="flex flex-col gap-2">
        <div className="text-title3 text-black">추천 점수 남기기</div>
        <StarRating rating={rating} onChange={(v) => onChange("rating", v)} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-title3 text-black">거주 여부</div>
        <SelectButtonGroup
          selected={residence}
          onChange={(v) => onChange("residence", v)}
          options={[
            { label: "현재 거주", value: "current" },
            { label: "과거 거주", value: "past" },
            { label: "거주 안함", value: "none" },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-title3 text-black">자녀 유무</div>
        <SelectButtonGroup
          selected={hasChild}
          onChange={(v) => onChange("hasChild", v)}
          options={[
            { label: "없음", value: "none" },
            { label: "있음", value: "yes" },
          ]}
        />
      </div>

      <ReviewTextarea value={content} onChange={(value: string) => onChange("content", value)} />
    </div>
  );
};

export default ReviewForm;
