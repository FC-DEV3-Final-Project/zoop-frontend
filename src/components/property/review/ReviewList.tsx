"use client";

import { useRouter } from "next/navigation";
import ReviewCard from "@/components/property/review/ReviewCard";

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

const ReviewList = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 bg-gray-100">
      {mock_reviews.map((review, index) => (
        <ReviewCard
          key={index}
          {...review}
          onClick={() => router.push(`/property/123/review/${review.id}`)} // 예시로 propertyId를 123으로 가정
        />
      ))}
    </div>
  );
};

export default ReviewList;
