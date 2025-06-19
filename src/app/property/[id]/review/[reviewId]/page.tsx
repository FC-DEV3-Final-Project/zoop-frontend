"use client";

import { useParams, useRouter } from "next/navigation";
import { useCommentListQuery } from "@/queries/property/review/useCommentListQuery";
import { useReviewListQuery } from "@/queries/property/review/useReviewListQuery";
import ReviewCard from "@/components/property/review/ReviewCard";
import CommentList from "@/components/property/review/CommentList";
import { Header } from "@/layout/Header";
import { formatDate } from "@/utils/property/formatDate";

const ReviewDetailPage = () => {
  const { id, reviewId } = useParams(); // id는 propertyId
  const router = useRouter();

  const propertyId = Number(id);
  const targetReviewId = Number(reviewId);

  const { data: reviewListData, isLoading: isReviewLoading } = useReviewListQuery(propertyId);

  const { data: commentData, isLoading: isCommentLoading } = useCommentListQuery(targetReviewId);

  if (isReviewLoading || isCommentLoading || !reviewListData || !commentData) return null;

  const review = reviewListData.find((r) => r.reviewId === targetReviewId);
  if (!review) return <div>리뷰를 찾을 수 없습니다.</div>;

  const residenceMap = {
    NON_RESIDENT: "거주 안함",
    CURRENT_RESIDENT: "현재 거주",
    PAST_RESIDENT: "이전 거주",
  } as const;

  const hasChildMap = {
    NON_CHILDREN: "자녀 없음",
    HAS_CHILDREN: "자녀 있음",
  } as const;

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
          residenceStatus={residenceMap[review.isResident as keyof typeof residenceMap]}
          hasChildStatus={hasChildMap[review.hasChildren as keyof typeof hasChildMap]}
          isMine={review.isMine}
        />
        <CommentList comments={commentData} />
      </div>
    </>
  );
};

export default ReviewDetailPage;
