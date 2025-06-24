"use client";

import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import { useRouter } from "next/navigation";
import { useDeleteReviewMutation } from "@/queries/property/review/useDeleteReviewMutation";
import ThumbsButton from "./ThumbsButton";
import CustomDialog from "@/components/common/CustomDialog";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

interface ReviewCardProps {
  propertyId: number;
  reviewId: number;
  nickname: string;
  date: string;
  content: string;
  rating: number;
  likes: number;
  comments: number;
  profileImageUrl: string;
  residenceStatus: string;
  hasChildStatus: string;
  isMine: boolean;
  isLikedByMe: boolean;
  onClick?: () => void;
}

const ReviewCard = ({
  propertyId,
  reviewId,
  nickname,
  date,
  content,
  rating,
  likes,
  comments,
  profileImageUrl,
  residenceStatus,
  hasChildStatus,
  isMine,
  isLikedByMe,
  onClick,
}: ReviewCardProps) => {
  const router = useRouter();
  const { mutate: deleteReview } = useDeleteReviewMutation(propertyId);
  const [showAlert, setShowAlert] = useState(false);

  const handleEdit = () => {
    router.push(`/property/${propertyId}/review/edit/${reviewId}`);
  };

  const handleDelete = () => {
    setShowAlert(true);
  };

  const confirmDelete = () => {
    deleteReview(reviewId, {
      onSuccess: () => {
        toast.custom(
          ({ id }) => (
            <CustomToast
              message="리뷰 삭제에 성공했습니다."
              type="success"
              onClickAction={() => toast.dismiss(id)}
            />
          ),
          { duration: 2000 },
        );
        router.push(`/property/${propertyId}/review`);
        setShowAlert(false);
      },
      onError: () => {
        toast.custom(
          ({ id }) => (
            <CustomToast
              message="리뷰 삭제에 실패했습니다. 다시 시도해주세요."
              type="error"
              onClickAction={() => toast.dismiss(id)}
            />
          ),
          { duration: 2000 },
        );
        setShowAlert(false);
      },
    });
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // 삭제, 편집 버튼 클릭 시 부모 이동 방지용
        onClick?.();
      }}
      className="cursor-pointer"
    >
      <div className="flex flex-col gap-4 border-b border-t border-gray-300 bg-white px-5 py-4">
        {/* 상단: 프로필 */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {profileImageUrl ? (
              <Image
                src={profileImageUrl}
                alt="profile"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            )}
            <div className="flex flex-col">
              <span className="text-body2 text-black">{nickname}</span>
              <span className="text-footnote text-gray-800">
                {residenceStatus} / {hasChildStatus}
              </span>
            </div>
          </div>
          {isMine && (
            <Dropdown
              items={[
                { type: "edit", label: "수정하기", onClick: handleEdit },
                { type: "delete", label: "삭제하기", onClick: handleDelete },
              ]}
            />
          )}
        </div>

        {/* 별점 */}
        <div className="flex h-[20px] items-center text-caption1 text-blue-800-primary">
          {[0, 1, 2, 3, 4].map((i) => {
            const filled = i + 1 <= Math.floor(rating);
            const isHalf = !filled && i + 0.5 <= rating;

            const icon = filled
              ? "/icons/star-filled.svg"
              : isHalf
                ? "/icons/star-half.svg"
                : "/icons/star-unfilled.svg";

            return <img key={i} src={icon} alt="star" width={16} height={16} className="block" />;
          })}

          <span className="ml-[5px] text-caption1 leading-none text-black">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* 본문 */}
        <p className="text-subtitle3 text-black">{content}</p>

        {/* 날짜 */}
        <p className="text-right text-body3 text-gray-700-info">{date}</p>
      </div>
      {/* 하단 버튼 */}
      <div className="bg-white px-5 py-3">
        <div className="flex gap-4 text-caption1 text-gray-700">
          <ThumbsButton
            itemId={reviewId}
            likeCount={likes}
            initialLiked={isLikedByMe}
            type="review"
          />
          <button className="flex items-center gap-1 text-caption2 text-gray-900">
            <img src="/icons/chat-text.svg" width={20} height={20} alt="comment" />
            댓글 {comments}
          </button>
        </div>
      </div>
      {showAlert && (
        <CustomDialog
          title="리뷰 삭제"
          description="이 작업은 취소할 수 없습니다."
          onConfirm={confirmDelete}
          cancelLabel="취소"
          confirmLabel="삭제"
          open={showAlert}
          onOpenChange={setShowAlert}
        />
      )}
    </div>
  );
};

export default ReviewCard;
