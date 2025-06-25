"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useCommentListQuery } from "@/queries/property/review/useCommentListQuery";
import { useReviewListQuery } from "@/queries/property/review/useReviewListQuery";
import { useUpdateCommentMutation } from "@/queries/property/review/useUpdateCommentMutation";
import ReviewCard from "@/components/property/review/ReviewCard";
import CommentList from "@/components/property/review/CommentList";
import { Header } from "@/layout/Header";
import { formatISODate } from "@/utils/property/dateFormat";
import AutoResizeTextarea from "@/components/ui/textarea";
import { usePostCommentMutation } from "@/queries/property/review/usePostCommentMutation";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

const ReviewDetailPage = () => {
  const { id, reviewId } = useParams();
  const router = useRouter();

  const propertyId = Number(id);
  const targetReviewId = Number(reviewId);
  const [sortType] = useState<"like" | "latest">("like");
  const currentSort = sortType === "like" ? "like" : "latest";

  const {
    data: reviewListData,
    isLoading: isReviewLoading,
    refetch: refetchReviewList,
  } = useReviewListQuery(propertyId, { sort: currentSort });

  const { data: commentData, isLoading: isCommentLoading } = useCommentListQuery(targetReviewId);

  const updateCommentMutation = useUpdateCommentMutation(targetReviewId);
  const postCommentMutation = usePostCommentMutation(targetReviewId, propertyId, currentSort);

  const [comment, setComment] = useState("");
  const [mode, setMode] = useState<"write" | "edit">("write");
  const [editTargetId, setEditTargetId] = useState<number | null>(null);

  const handleComment = () => {
    if (!comment.trim()) return;

    if (mode === "write") {
      postCommentMutation.mutate(comment, {
        onSuccess: () => {
          setComment("");
          refetchReviewList();
          toast.custom(
            ({ id }) => (
              <CustomToast
                message="댓글이 등록되었습니다."
                type="success"
                onClickAction={() => toast.dismiss(id)}
              />
            ),
            { duration: 2000 },
          );
        },
      });
    } else if (mode === "edit" && editTargetId !== null) {
      updateCommentMutation.mutate(
        { commentId: editTargetId, content: comment },
        {
          onSuccess: () => {
            setComment("");
            setMode("write");
            setEditTargetId(null);
            toast.custom(
              ({ id }) => (
                <CustomToast
                  message="댓글이 수정되었습니다."
                  type="success"
                  onClickAction={() => toast.dismiss(id)}
                />
              ),
              { duration: 2000 },
            );
          },
        },
      );

      return;
    }

    setComment("");
    setMode("write");
    setEditTargetId(null);
  };

  const handleEdit = (id: number) => {
    if (!commentData) return;
    const target = commentData.find((c) => c.commentId === id);
    if (!target) return;

    setMode("edit");
    setEditTargetId(id);
    setComment(target.content);
  };

  if (isReviewLoading || isCommentLoading || !reviewListData || !commentData) return null;

  const review = reviewListData.reviews.find((r) => r.reviewId === targetReviewId);
  if (!review) return <div>리뷰를 찾을 수 없습니다.</div>;

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
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>리뷰</Header.Title>
      </Header>

      <div className="flex h-full min-h-screen flex-col bg-white pb-[100px] pt-12">
        <ReviewCard
          key={`${review.reviewId}-${review.commentCount}`}
          propertyId={propertyId}
          reviewId={review.reviewId}
          nickname={review.nickname}
          date={formatISODate(review.createdAt)}
          content={review.content}
          rating={review.rating}
          likes={review.likeCount}
          comments={review.commentCount}
          profileImageUrl={review.profileImage || ""}
          residenceStatus={residenceMap[review.isResident as keyof typeof residenceMap]}
          hasChildStatus={hasChildMap[review.hasChildren as keyof typeof hasChildMap]}
          isMine={review.isMine}
          isLikedByMe={review.isLikedByMe}
        />

        <CommentList
          propertyId={propertyId}
          currentSort={currentSort}
          reviewId={targetReviewId}
          comments={commentData}
          onEdit={(id) => handleEdit(id)}
          onDeleteSuccess={() => {
            refetchReviewList();
          }}
        />

        <div className="fixed bottom-0 left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 bg-white px-5 py-2">
          <AutoResizeTextarea
            placeholder={mode === "edit" ? "댓글을 수정하세요" : "댓글을 입력하세요"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onSend={handleComment}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewDetailPage;
