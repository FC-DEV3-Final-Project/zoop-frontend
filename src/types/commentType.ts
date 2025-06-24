export type CommentType = {
  commentId: number;
  userId: number;
  nickname: string;
  profileImage: string | null;
  content: string;
  likeCount: number;
  isLikedByMe: boolean;
  isMine: boolean;
  createdAt: string;
  updatedAt: string | null;
};

export type ToggleCommentLikeType = {
  reviewId: number;
  commentId: number;
  userId: number;
  isLiked: boolean;
  likeCount: number;
};
