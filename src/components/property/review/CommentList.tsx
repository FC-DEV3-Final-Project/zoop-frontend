"use client";

import Image from "next/image";
import { Comment } from "@/apis/property/review/fetchComments";
import { formatDate } from "@/utils/property/formatDate";

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
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
            <span className="text-gray-400">···</span>
          </div>

          <p className="text-subtitle3 text-black">{comment.content}</p>

          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-caption3 text-gray-900">
              <img src="/icons/thumbsup-outline.svg" alt="like" width={16} height={16} />
              {comment.likeCount > 0 ? `공감 ${comment.likeCount}` : "공감하기"}
            </button>

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
