import { useState } from "react";

export const useLike = (itemId: number) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = async () => {
    try {
      // API 요청 로직 추가
      // const response = await fetch(`/api/like/${itemId}`, {
      //   method: isLiked ? "DELETE" : "POST",
      // });
      // if (!response.ok) throw new Error("Failed to toggle like");

      setIsLiked((prev) => !prev); // 낙관적 업데이트
    } catch (error) {
      console.error("Failed to toggle like:", error);
      // 에러 발생 시 상태 롤백
      setIsLiked((prev) => !prev);
    }
  };

  return { isLiked, toggleLike };
};
