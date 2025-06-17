export type Comment = {
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

export const fetchComments = async (reviewId: number): Promise<Comment[]> => {
  const res = await fetch(`/reviews/${reviewId}/comments`);
  if (!res.ok) throw new Error("댓글 불러오기 실패");
  const json = await res.json();
  return json.data.comments;
};
