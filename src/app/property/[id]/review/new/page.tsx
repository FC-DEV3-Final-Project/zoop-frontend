"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import ReviewForm from "@/components/property/review/newandedit/ReviewForm";
import { usePostReviewMutation } from "@/queries/property/review/usePostReviewMutation";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";
import { Button } from "@/components/ui/button";

const NewReviewPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: propertyIdString } = use(params);
  const propertyId = Number(propertyIdString);
  const router = useRouter();

  const { data: basicInfo, isLoading } = useBasicInfoQuery(propertyId);
  const { mutate } = usePostReviewMutation(propertyId);

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [residence, setResidence] = useState<"current" | "past" | "none">("current");
  const [hasChild, setHasChild] = useState<"yes" | "none">("none");

  const handleChange = (field: "rating" | "content" | "residence" | "hasChild", value: any) => {
    if (field === "rating") setRating(value);
    if (field === "content") setContent(value);
    if (field === "residence") setResidence(value);
    if (field === "hasChild") setHasChild(value);
  };

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
        rating,
        content,
        hasChildren: mappedHasChild,
        isResident: mappedResident,
      },
      {
        onSuccess: () => {
          router.push(`/property/${propertyId}/review`);
        },
        onError: () => {
          alert("리뷰 등록에 실패했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  // 로딩 관련 일괄 수정 예정
  if (isLoading) return <div className="p-4">매물 정보를 불러오는 중...</div>;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>리뷰 작성하기</Header.Title>
      </Header>

      <div className="flex-1 overflow-y-auto pt-16">
        <div className="mb-5 px-5 text-title2 text-blue-800-primary">{basicInfo?.articleName}</div>
        <ReviewForm
          rating={rating}
          content={content}
          residence={residence}
          hasChild={hasChild}
          onChange={handleChange}
        />
      </div>

      {/* ✅ sticky 등록 버튼 */}
      <div className="sticky bottom-0 left-0 z-10 w-full max-w-[600px] bg-white px-5 py-3">
        <Button variant="default" className="w-full" onClick={handleSubmit}>
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default NewReviewPage;
