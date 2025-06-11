"use client";

import { useParams, useRouter } from "next/navigation";
import ReviewCard from "@/components/property/review/ReviewCard";
import CommentList from "@/components/property/review/CommentList";
import { Header } from "@/layout/Header";

const ReviewDetailPage = () => {
  const { reviewId } = useParams();
  const router = useRouter();

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

  const review = mock_reviews.find((r) => String(r.id) === String(reviewId));
  /* 디자인 추가 고려 */
  if (!review) return <div>리뷰를 찾을 수 없습니다.</div>;

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>리뷰 줍줍</Header.Title>
      </Header>
      <div className="flex h-full min-h-screen flex-col bg-white pt-16">
        <ReviewCard {...review} />
        <CommentList reviewId={review.id} />
      </div>
    </>
  );
};

export default ReviewDetailPage;
