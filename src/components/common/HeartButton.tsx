"use client";

import { useEffect, useState } from "react";
import { usePostBookmark } from "@/queries/property/detail/usePostBookmarkmutation";
import { usePatchBookmark } from "@/queries/property/detail/usePatchBookmarkmutation";

interface HeartButtonProps {
  itemId: number;
  initialBookmarked: boolean;
}

const HeartButton = ({ itemId, initialBookmarked }: HeartButtonProps) => {
  const [isLiked, setIsLiked] = useState(initialBookmarked);
  const postMutation = usePostBookmark();
  const patchMutation = usePatchBookmark();

  useEffect(() => {
    setIsLiked(initialBookmarked);
  }, [initialBookmarked]);

  const toggleLike = () => {
    const mutation = isLiked ? patchMutation : postMutation;

    mutation.mutate(itemId, {
      onSuccess: (data) => {
        setIsLiked(data.isBookmarked);
      },
    });
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleLike();
      }}
      className="relative h-6 w-6 cursor-pointer overflow-hidden"
    >
      <img
        src={isLiked ? "/icons/heart-filled.svg" : "/icons/heart-outline.svg"}
        alt={isLiked ? "찜하기 완료" : "찜하기"}
      />
    </button>
  );
};

export default HeartButton;
