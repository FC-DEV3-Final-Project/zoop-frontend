"use client";

import { useEffect, useState } from "react";
import { usePostBookmark } from "@/queries/property/detail/usePostBookmarkmutation";
import { usePatchBookmark } from "@/queries/property/detail/usePatchBookmarkmutation";

interface BookmarkButtonProps {
  itemId: number;
  initialBookmarked: boolean;
  onSuccess?: (added: boolean) => void; // boolean 인자를 받는 함수 타입으로 수정
}

const BookmarkButton = ({ itemId, initialBookmarked, onSuccess }: BookmarkButtonProps) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const postMutation = usePostBookmark();
  const patchMutation = usePatchBookmark();

  useEffect(() => {
    setIsBookmarked(initialBookmarked);
  }, [initialBookmarked]);

  const toggleLike = () => {
    const mutation = isBookmarked ? patchMutation : postMutation;

    mutation.mutate(itemId, {
      onSuccess: (data) => {
        setIsBookmarked(data.isBookmarked);
        if (onSuccess) {
          onSuccess(data.isBookmarked); // 찜 추가(true) 또는 취소(false) 상태 전달
        }
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
        src={isBookmarked ? "/icons/heart-filled.svg" : "/icons/heart-outline.svg"}
        alt={isBookmarked ? "북마크 상태" : "북마크 미반영 상태"}
      />
    </button>
  );
};

export default BookmarkButton;
