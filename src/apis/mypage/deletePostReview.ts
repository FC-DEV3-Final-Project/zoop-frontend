import axiosInstance from "@/apis/utils/axiosInstance";

interface DeletePostReviewResponse {
  success: boolean;
  message: string;
  deletedReviewId?: number;
}

export const deletePostReview = async (reviewId: number): Promise<DeletePostReviewResponse> => {
  const res = await axiosInstance.delete(`/mypage/reviews/${reviewId}`);
  return {
    success: true,
    message: "리뷰가 성공적으로 삭제되었습니다.",
    deletedReviewId: reviewId,
    ...res.data,
  };
};
