"use client";

import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import { Comment } from "@/apis/property/review/fetchComments";
import { formatDate } from "@/utils/property/formatDate";
import { useDeleteCommentMutation } from "@/queries/property/review/useDeleteCommentMutation";
import ThumbsButton from "./ThumbsButton";

interface CommentListProps {
  reviewId: number;
  comments: Comment[];
  onEdit: (id: number, content: string) => void;
}

const CommentList = ({ reviewId, comments, onEdit }: CommentListProps) => {
  const { mutate: deleteComment } = useDeleteCommentMutation(reviewId);

  const handleDelete = (commentId: number) => {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      deleteComment(commentId, {
        onSuccess: () => {
          console.log("댓글 삭제 성공");
        },
        onError: () => {
          alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
        },
      });
    }
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
                    onClick: () => handleDelete(comment.commentId),
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
              {formatDate(comment.createdAt)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
