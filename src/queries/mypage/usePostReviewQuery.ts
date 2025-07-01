import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchPostReview = async () => {
  const res = await axiosInstance.get("/mypage/reviews");
  return res.data.data || [];
};

export const usePostReviewQuery = () =>
  useQuery({
    queryKey: ["postReview"],
    queryFn: fetchPostReview,
  });
