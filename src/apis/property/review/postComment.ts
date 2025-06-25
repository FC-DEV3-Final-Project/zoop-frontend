import axiosInstance from "@/apis/utils/axiosInstance";

export const postComment = async (reviewId: number, content: string) => {
  const response = await axiosInstance.post(`/reviews/${reviewId}/comments`, { content });
  return response.data.data;
};
