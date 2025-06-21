"use client";

import { useState, useEffect } from "react";
import { usePutReviewLikeMutation } from "@/queries/property/review/usePutReviewLikeMutation";
import { usePutCommentLikeMutation } from "@/queries/property/review/usePutCommentLikeMutation";

interface ThumbsButtonProps {
  itemId: number;
  likeCount: number;
  initialLiked: boolean;
  type: "review" | "comment";
  reviewId?: number;
}

const ThumbsButton = ({ itemId, likeCount, initialLiked, type, reviewId }: ThumbsButtonProps) => {
  const { mutateAsync: toggleReviewLike } = usePutReviewLikeMutation();
  const { mutateAsync: toggleCommentLike } = usePutCommentLikeMutation(reviewId!);

  const [isLiked, setIsLiked] = useState(initialLiked);
  const [count, setCount] = useState(likeCount);

  useEffect(() => {
    setIsLiked(initialLiked);
    setCount(likeCount);
  }, [initialLiked, likeCount]);

  const handleClick = async () => {
    try {
      const result =
        type === "review" ? await toggleReviewLike(itemId) : await toggleCommentLike(itemId);

      const nextLiked = result.isLiked;

      // 낙관적 업데이트
      setCount((prev) => {
        if (!isLiked && nextLiked) return prev + 1;
        if (isLiked && !nextLiked) return prev - 1;
        return prev;
      });

      setIsLiked(nextLiked);
    } catch (err) {
      console.error("공감 처리 실패:", err);
    }
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-1 text-caption2 text-gray-900"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <img
        src={isLiked ? "/icons/thumbsup-filled.svg" : "/icons/thumbsup-outline.svg"}
        width={20}
        height={20}
        alt="like"
      />
      {count > 0 ? `공감 ${count}` : "공감하기"}
    </div>
  );
};

export default ThumbsButton;
