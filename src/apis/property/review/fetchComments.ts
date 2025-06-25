import axiosInstance from "@/apis/utils/axiosInstance";
import { CommentType } from "@/types/commentType";

export const fetchComments = async (reviewId: number): Promise<CommentType[]> => {
  const res = await axiosInstance.get(`/reviews/${reviewId}/comments`);
  return res.data?.data ?? [];
};
