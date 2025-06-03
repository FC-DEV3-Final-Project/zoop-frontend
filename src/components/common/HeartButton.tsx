import Image from "next/image";
import { useLike } from "@/hooks/useLike";

interface HeartButtonProps {
  itemId: number;
}

const HeartButton = ({ itemId }: HeartButtonProps) => {
  const { isLiked, toggleLike } = useLike(itemId);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
        toggleLike();
      }}
      className="relative h-6 w-6 cursor-pointer overflow-hidden"
    >
      <Image
        src={isLiked ? "/icons/heart_true.svg" : "/icons/heart_false.svg"}
        alt={isLiked ? "찜하기 완료" : "찜하기"}
        width={24}
        height={24}
      />
    </button>
  );
};

export default HeartButton;
