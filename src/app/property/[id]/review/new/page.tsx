"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import SelectButtonGroup from "@/components/property/review/new/SelectButtonGroup";
import ReviewTextarea from "@/components/property/review/new/ReviewTextarea";
import StarRating from "@/components/property/review/new/StarRating";
import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";
import { usePostReviewMutation } from "@/queries/property/review/usePostReviewMutation";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";

const NewReviewPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: propertyIdString } = use(params);
  const propertyId = Number(propertyIdString);
  const router = useRouter();

  const [residence, setResidence] = useState("current");
  const [hasChild, setHasChild] = useState("none");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const { data: basicInfo, isLoading } = useBasicInfoQuery(propertyId);
  const complexId = basicInfo?.complexId ?? null;

  const { mutate } = usePostReviewMutation(propertyId);

  const handleSubmit = () => {
    const mappedHasChild = hasChild === "yes" ? "HAS_CHILDREN" : "NON_CHILDREN";
    const mappedResident =
      residence === "current"
        ? "CURRENT_RESIDENT"
        : residence === "past"
          ? "PAST_RESIDENT"
          : "NON_RESIDENT";

    mutate(
      {
        complexId,
        rating,
        content,
        hasChildren: mappedHasChild,
        isResident: mappedResident,
      },
      {
        onSuccess: (data) => {
          console.log("✅ 리뷰 등록 성공:", data);
          router.push(`/property/${propertyId}/review`);
        },
      },
    );
  };

  // 로딩 단순 사용만 한 상태로 수정 예정
  if (isLoading) return <div className="p-4">매물 정보를 불러오는 중...</div>;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>리뷰 작성하기</Header.Title>
      </Header>

      <div className="flex-1 overflow-y-auto px-5 pb-[100px] pt-24">
        <div className="mb-[30px] text-title2 text-blue-800-primary">{basicInfo?.articleName}</div>

        <div className="mb-[18px] flex flex-col gap-2">
          <div className="text-title3 text-black">추천 점수 남기기</div>
          <StarRating rating={rating} onChange={setRating} />
        </div>

        <div className="mb-4 flex flex-col gap-2">
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

        <div className="mb-4 flex flex-col gap-2">
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

        <ReviewTextarea value={content} onChange={setContent} />
      </div>

      <div className="sticky bottom-0 left-0 w-full bg-white px-5 py-3">
        <Button variant="default" className="w-full" onClick={handleSubmit}>
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default NewReviewPage;
