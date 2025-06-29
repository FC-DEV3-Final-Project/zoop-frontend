"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewSortButtons from "./ReviewSortButtons";
import { useReviewListQuery } from "@/queries/property/review/useReviewListQuery";
import { starAvg } from "@/utils/property/starAvg";
import type { StarType } from "@/utils/property/starAvg";
import { formatISODate } from "@/utils/property/dateFormat";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyListMessage from "@/components/common/EmptyListMessage";

type SortType = "like" | "latest";

interface ReviewListProps {
  propertyId: number;
}

const ReviewList = ({ propertyId }: ReviewListProps) => {
  const router = useRouter();
  const [sortType, setSortType] = useState<SortType>("like");

  const { data, isLoading } = useReviewListQuery(propertyId, {
    sort: sortType === "like" ? "like" : "latest",
  });

  const reviews = data?.reviews ?? [];

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
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-[15px]">
          <div className="text-subtitle2 text-black">{`리뷰 ${reviews.length}건`}</div>

          {/* 평균 별점 표시 */}
          {data?.avgRating !== undefined && (
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => {
                const type: StarType = starAvg(data.avgRating, i);
                const icon = `/icons/star-${type}.svg`;

                return (
                  <img
                    key={i}
                    src={icon}
                    alt={`별 ${i + 1}`}
                    width={20}
                    height={20}
                    className="block"
                  />
                );
              })}
              <span className="ml-1 inline-block translate-y-[1px] text-subtitle2 text-black">
                {data.avgRating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        <ReviewSortButtons sortType={sortType} onChange={setSortType} />
      </div>

      <div className="flex flex-col gap-2 bg-white">
        {isLoading ? (
          <div className="space-y-2 px-5 py-4">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
          </div>
        ) : reviews.length === 0 ? (
          <EmptyListMessage message="아직 등록된 리뷰가 없습니다." className="px-5 py-4" />
        ) : (
          reviews.map((review) => (
            <ReviewCard
              propertyId={propertyId}
              reviewId={review.reviewId}
              key={review.reviewId}
              nickname={review.nickname}
              date={formatISODate(review.createdAt)}
              content={review.content}
              rating={review.rating}
              likes={review.likeCount}
              comments={review.commentCount}
              profileImageUrl={review.profileImage || ""}
              residenceStatus={residenceMap[review.isResident]}
              hasChildStatus={hasChildMap[review.hasChildren]}
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
