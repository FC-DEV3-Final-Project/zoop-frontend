"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import ReviewForm from "@/components/property/review/newandedit/ReviewForm";
import { Button } from "@/components/ui/button";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";
import { useReviewListQuery } from "@/queries/property/review/useReviewListQuery";
import { usePatchReviewMutation } from "@/queries/property/review/usePatchReviewMutation";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

const EditReviewPage = ({ params }: { params: Promise<{ id: string; reviewId: string }> }) => {
  const { id: propertyIdString, reviewId: reviewIdString } = use(params);
  const propertyId = Number(propertyIdString);
  const reviewId = Number(reviewIdString);
  const router = useRouter();

  const { data: basicInfo, isLoading: isBasicLoading } = useBasicInfoQuery(propertyId);
  const { data: reviewListData, isLoading: isReviewLoading } = useReviewListQuery(propertyId);
  const { mutate } = usePatchReviewMutation(reviewId);

  const review = reviewListData?.reviews.find((r) => r.reviewId === reviewId);

  const [rating, setRating] = useState(review?.rating ?? 0);
  const [content, setContent] = useState(review?.content ?? "");
  const [residence, setResidence] = useState<"current" | "past" | "none">(() => {
    if (review?.isResident === "CURRENT_RESIDENT") return "current";
    if (review?.isResident === "PAST_RESIDENT") return "past";
    return "none";
  });
  const [hasChild, setHasChild] = useState<"yes" | "none">(
    review?.hasChildren === "HAS_CHILDREN" ? "yes" : "none",
  );

  useEffect(() => {
    if (review) {
      setRating(review.rating);
      setContent(review.content);
      setResidence(
        review.isResident === "CURRENT_RESIDENT"
          ? "current"
          : review.isResident === "PAST_RESIDENT"
            ? "past"
            : "none",
      );
      setHasChild(review.hasChildren === "HAS_CHILDREN" ? "yes" : "none");
    }
  }, [review]);

  const handleChange = (field: "rating" | "content" | "residence" | "hasChild", value: any) => {
    if (field === "rating") setRating(value);
    if (field === "content") setContent(value);
    if (field === "residence") setResidence(value);
    if (field === "hasChild") setHasChild(value);
  };

  const isValid = rating > 0 && content.trim() !== "" && residence !== "none";

  const handleSubmit = () => {
    if (!isValid) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

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
          toast.custom(
            ({ id }) => (
              <CustomToast
                message="리뷰가 성공적으로 수정되었습니다."
                type="success"
                onClickAction={() => toast.dismiss(id)}
              />
            ),
            { duration: 3000 },
          );

          router.replace(`/property/${propertyId}/review/`);
        },
        onError: () => {
          toast.custom(
            ({ id }) => (
              <CustomToast
                message="리뷰 수정에 실패했습니다. 잠시 후 다시 시도해주세요."
                type="error"
                onClickAction={() => toast.dismiss(id)}
              />
            ),
            { duration: 3000 },
          );
        },
      },
    );
  };

  if (isBasicLoading || isReviewLoading || !review) return <div className="p-4">로딩 중...</div>;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.replace(`/property/${propertyId}/review`)} />
        <Header.Title>리뷰 수정하기</Header.Title>
      </Header>

      <div className="flex-1 overflow-y-auto pt-12">
        <div className="mb-5 mt-[30px] px-5 text-title2 text-blue-800-primary">
          {basicInfo?.articleName}
        </div>
        <ReviewForm
          rating={rating}
          content={content}
          residence={residence}
          hasChild={hasChild}
          onChange={handleChange}
        />
      </div>

      <div className="sticky bottom-0 left-0 z-10 w-full max-w-[600px] bg-white px-5 py-3">
        <Button variant="default" className="w-full" onClick={handleSubmit} disabled={!isValid}>
          수정 완료
        </Button>
      </div>
    </div>
  );
};

export default EditReviewPage;
