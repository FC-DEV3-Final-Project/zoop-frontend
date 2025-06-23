"use client";

import { useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import { CommentType } from "@/types/commentType";
import { formatISODate } from "@/utils/property/dateFormat";
import { useDeleteCommentMutation } from "@/queries/property/review/useDeleteCommentMutation";
import ThumbsButton from "@/components/property/review/ThumbsButton";
import Alert from "@/components/common/Alert";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

interface CommentListProps {
  reviewId: number;
  propertyId: number;
  currentSort: "like" | "latest";
  comments: CommentType[];
  onEdit: (id: number, content: string) => void;
  onDeleteSuccess?: () => void;
}

const CommentList = ({
  reviewId,
  propertyId,
  currentSort,
  comments,
  onEdit,
  onDeleteSuccess,
}: CommentListProps) => {
  const { mutate: deleteComment } = useDeleteCommentMutation(reviewId, propertyId, currentSort);
  const [showAlert, setShowAlert] = useState(false);
  const [targetCommentId, setTargetCommentId] = useState<number | null>(null);

  const openDeleteAlert = (commentId: number) => {
    setTargetCommentId(commentId);
    setShowAlert(true);
  };

  const confirmDelete = () => {
    if (targetCommentId === null) return;
    deleteComment(targetCommentId, {
      onSuccess: () => {
        toast.custom(
          ({ id }) => (
            <CustomToast
              message="댓글 삭제에 성공했습니다."
              type="success"
              onClickAction={() => toast.dismiss(id)}
              actionText="닫기"
            />
          ),
          { duration: 4000 },
        );

        onDeleteSuccess?.();
        setShowAlert(false);
        setTargetCommentId(null);
      },
      onError: () => {
        toast.custom(
          ({ id }) => (
            <CustomToast
              message="댓글 삭제에 실패했습니다. 다시 시도해주세요."
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
    <div className="flex flex-col bg-gray-100">
      {comments.map((comment) => (
        <div
          key={comment.commentId}
          className="flex flex-col gap-2 border border-t-gray-300 px-5 py-4"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              {comment.profileImage ? (
                <Image
                  src={comment.profileImage}
                  alt="profile"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-gray-500" />
              )}
              <span className="text-body2 text-black">{comment.nickname}</span>
            </div>
            {comment.isMine && (
              <Dropdown
                items={[
                  {
                    type: "edit",
                    label: "수정하기",
                    onClick: () => onEdit(comment.commentId, comment.content),
                  },
                  {
                    type: "delete",
                    label: "삭제하기",
                    onClick: () => openDeleteAlert(comment.commentId),
                  },
                ]}
              />
            )}
          </div>

          <p className="text-subtitle3 text-black">{comment.content}</p>

          <div className="flex items-center justify-between">
            <ThumbsButton
              itemId={comment.commentId}
              likeCount={comment.likeCount}
              initialLiked={comment.isLikedByMe}
              type="comment"
              reviewId={reviewId}
            />
            <span className="text-footnote text-gray-700-info">
              {formatISODate(comment.createdAt)}
            </span>
          </div>
        </div>
      ))}
      {showAlert && (
        <Alert
          title="댓글 삭제"
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

export default CommentList;
