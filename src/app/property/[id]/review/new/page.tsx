"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SelectButtonGroup from "@/components/property/review/new/SelectButtonGroup";
import ReviewTextarea from "@/components/property/review/new/ReviewTextarea";
import StarRating from "@/components/property/review/new/StarRating";
import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";

const NewReviewPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const propertyId = params.id;

  const [residence, setResidence] = useState("current");
  const [hasChild, setHasChild] = useState("none");

  const handleSubmit = () => {
    router.push(`/property/${propertyId}/review`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>매물 리뷰 작성하기</Header.Title>
      </Header>

      {/* 본문 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto px-5 pb-[100px] pt-24">
        <div className="mb-[30px] text-title2 text-blue-800-primary">
          방배마에스트로[주상복합] 아파트
        </div>

        <div className="flex flex-col gap-[17px]">
          {/* 별점 남기기 */}
          <div className="flex flex-col gap-2">
            <div className="text-title3 text-black">추천 점수 남기기</div>
            <StarRating />
          </div>
          {/* 거주 여부 */}
          <div className="flex flex-col gap-2">
            <div className="text-title3 text-black">거주 여부</div>
            <SelectButtonGroup
              selected={residence}
              onChange={setResidence}
              options={[
                { label: "현재 거주", value: "current" },
                { label: "과거 거주", value: "past" },
                { label: "거주 안함", value: "none" },
              ]}
            />
          </div>

          {/* 자녀 유무 */}
          <div className="flex flex-col gap-2">
            <div className="text-title3 text-black">자녀 유무</div>
            <SelectButtonGroup
              selected={hasChild}
              onChange={setHasChild}
              options={[
                { label: "없음", value: "none" },
                { label: "있음", value: "yes" },
              ]}
            />
          </div>
          {/* 리뷰 작성 */}
          <ReviewTextarea />
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 left-0 w-full bg-white px-5 py-3">
        <Button variant="default" className="w-full" onClick={handleSubmit}>
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default NewReviewPage;
