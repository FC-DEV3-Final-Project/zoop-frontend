"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReviewCard from "@/components/property/review/ReviewCard";
import ReviewSortButtons from "@/components/property/review/ReviewSortButtons";

type SortType = "recommended" | "latest" | "mine";

const mock_reviews = [
  {
    id: 1,
    nickname: "kimzzupzzup",
    date: "2025.01.21",
    content: "교통이 너무 편한 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
    rating: 4.0,
    likes: 5,
    comments: 2,
    profileImageUrl: "",
    residenceStatus: "현재 거주",
    hasChildStatus: "자녀 없음",
  },
  {
    id: 2,
    nickname: "factttt84",
    date: "2025.01.21",
    content: "연로하신 부모님 모시는 사람이라면 무조건!",
    rating: 4.5,
    likes: 3,
    comments: 1,
    profileImageUrl: "",
    residenceStatus: "이전 거주",
    hasChildStatus: "자녀 있음",
  },
];

const ReviewList = ({ complexId }: { complexId: string }) => {
  const router = useRouter();

  const [sortType, setSortType] = useState<SortType>("recommended");
  const [reviews, setReviews] = useState<typeof mock_reviews>([]);

  useEffect(() => {
    // 이곳에 sortType 기반 API 호출 넣으면 됨
    // 예시: fetchReviews({ complexId, sortType }).then(setReviews)
    setReviews(mock_reviews); // mock으로 대체 중
  }, [sortType]);
  return (
    <>
      {/* 상단: 리뷰 건수 + 정렬 버튼 */}
      <div className="flex justify-between px-5 py-3">
        <div className="text-subtitle2 text-black">{`정보 줍줍 ${reviews.length}건`}</div>
        <ReviewSortButtons sortType={sortType} onChange={setSortType} />
      </div>

      {/* 리뷰 카드 리스트 - flex column with gap */}
      <div className="flex flex-col gap-2 bg-gray-100">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            {...review}
            onClick={() => {
              router.push(`/property/${complexId}/review/${review.id}`);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewList;
