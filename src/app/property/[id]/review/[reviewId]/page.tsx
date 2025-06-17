"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchReviewList } from "@/apis/property/review/fetchReviewList";
import { fetchComments } from "@/apis/property/review/fetchComments";
import ReviewCard from "@/components/property/review/ReviewCard";
import CommentList from "@/components/property/review/CommentList";
import { Header } from "@/layout/Header";
import { formatDate } from "@/utils/property/formatDate";

const ReviewDetailPage = () => {
  const { id, reviewId } = useParams(); // id는 propertyId
  const router = useRouter();

  const propertyId = Number(id);
  const targetReviewId = Number(reviewId);

  // 전체 리뷰 리스트 fetch
  const { data: reviewListData, isLoading: isReviewLoading } = useQuery({
    queryKey: ["reviewList", propertyId],
    queryFn: () => fetchReviewList(propertyId),
  });

  // 댓글 리스트 fetch
  const { data: commentData, isLoading: isCommentLoading } = useQuery({
    queryKey: ["comments", targetReviewId],
    queryFn: () => fetchComments(targetReviewId),
  });

  if (isReviewLoading || isCommentLoading || !reviewListData || !commentData) return null;

  const review = reviewListData.find((r) => r.reviewId === targetReviewId);
  if (!review) return <div>리뷰를 찾을 수 없습니다.</div>;

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>리뷰 줍줍</Header.Title>
      </Header>

      <div className="flex h-full min-h-screen flex-col bg-white pt-16">
        <ReviewCard
          nickname={review.nickname}
          date={formatDate(review.createdAt)}
          content={review.content}
          rating={review.rating}
          likes={review.likeCount}
          comments={review.commentCount}
          profileImageUrl={review.profileImage || ""}
          residenceStatus={review.isResident ? "현재 거주" : "이전 거주"}
          hasChildStatus={review.hasChildren ? "자녀 있음" : "자녀 없음"}
        />
        <CommentList comments={commentData} />
      </div>
    </>
  );
};

export default ReviewDetailPage;
