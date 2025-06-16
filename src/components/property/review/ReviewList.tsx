"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewSortButtons from "./ReviewSortButtons";
import { fetchReviewList, Review } from "@/apis/property/review/fetchReviewList";
import { formatDate } from "@/utils/property/formatDate";

type SortType = "recommended" | "latest" | "mine";

interface ReviewListProps {
  propertyId: number;
}

const ReviewList = ({ propertyId }: ReviewListProps) => {
  const router = useRouter();
  const [sortType, setSortType] = useState<SortType>("recommended");
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviewList(propertyId).then(setReviews);
  }, [propertyId]);

  return (
    <>
      <div className="flex justify-between px-5 py-3">
        <div className="text-subtitle2 text-black">{`정보 줍줍 ${reviews.length}건`}</div>
        <ReviewSortButtons sortType={sortType} onChange={setSortType} />
      </div>

      <div className="flex flex-col gap-2 bg-gray-100">
        {reviews.map((review) => (
          <ReviewCard
            key={review.reviewId}
            nickname={review.nickname}
            date={formatDate(review.createdAt)}
            content={review.content}
            rating={review.rating}
            likes={review.likeCount}
            comments={review.commentCount}
            profileImageUrl={review.profileImage || ""}
            residenceStatus={review.isResident ? "현재 거주" : "이전 거주"}
            hasChildStatus={review.hasChildren ? "자녀 있음" : "자녀 없음"}
            onClick={() => router.push(`/property/${propertyId}/review/${review.reviewId}`)}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewList;
