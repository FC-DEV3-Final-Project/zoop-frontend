"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import ReviewForm from "@/components/property/review/newandedit/ReviewForm";
import { usePostReviewMutation } from "@/queries/property/review/usePostReviewMutation";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

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
                message="리뷰가 성공적으로 등록되었습니다."
                type="success"
                onClickAction={() => toast.dismiss(id)}
              />
            ),
            { duration: 3000 },
          );

          router.push(`/property/${propertyId}/review`);
        },
        onError: () => {
          toast.custom(
            ({ id }) => (
              <CustomToast
                message="리뷰 등록에 실패했습니다. 다시 시도해주세요."
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

  if (isLoading) return <div className="p-4">매물 정보를 불러오는 중...</div>;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>리뷰 작성하기</Header.Title>
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
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default NewReviewPage;
