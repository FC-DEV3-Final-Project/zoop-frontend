import axiosInstance from "@/apis/utils/axiosInstance";

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
  const res = await axiosInstance.get(`/reviews/${reviewId}/comments`);
  return res.data.data.comments;
};
