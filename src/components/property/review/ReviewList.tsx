"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewSortButtons from "./ReviewSortButtons";
import { useReviewListQuery } from "@/queries/property/review/useReviewListQuery";
import { formatDate } from "@/utils/property/formatDate";

type SortType = "recommended" | "latest";

interface ReviewListProps {
  propertyId: number;
}

const ReviewList = ({ propertyId }: ReviewListProps) => {
  const router = useRouter();
  const [sortType, setSortType] = useState<SortType>("recommended");

  const { data: reviews = [], isLoading } = useReviewListQuery(propertyId, {
    sort: sortType === "recommended" ? "like" : "latest",
  });

  const residenceMap = {
    NON_RESIDENT: "거주 안함",
    CURRENT_RESIDENT: "현재 거주",
    PAST_RESIDENT: "과거 거주",
  } as const;

  const hasChildMap = {
    NON_CHILDREN: "자녀 없음",
    HAS_CHILDREN: "자녀 있음",
  } as const;

  return (
    <>
      <div className="flex justify-between px-5 py-3">
        <div className="text-subtitle2 text-black">{`정보 줍줍 ${reviews.length}건`}</div>
        <ReviewSortButtons sortType={sortType} onChange={setSortType} />
      </div>

      <div className="flex flex-col gap-2 bg-gray-100">
        {isLoading ? (
          <div className="px-5 py-4 text-body2 text-gray-500">리뷰를 불러오는 중입니다...</div>
        ) : (
          reviews.map((review) => (
            <ReviewCard
              propertyId={propertyId}
              reviewId={review.reviewId}
              key={review.reviewId}
              nickname={review.nickname}
              date={formatDate(review.createdAt)}
              content={review.content}
              rating={review.rating}
              likes={review.likeCount}
              comments={review.commentCount}
              profileImageUrl={review.profileImage || ""}
              residenceStatus={residenceMap[review.isResident as keyof typeof residenceMap]}
              hasChildStatus={hasChildMap[review.hasChildren as keyof typeof hasChildMap]}
              onClick={() => router.push(`/property/${propertyId}/review/${review.reviewId}`)}
              isLikedByMe={review.isLikedByMe}
              isMine={review.isMine}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ReviewList;
