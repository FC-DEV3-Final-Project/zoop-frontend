import { useQuery } from "@tanstack/react-query";
import fetchPostReview from "@/apis/mypage/fetchPostReview";

export const usePostReviewQuery = () =>
  useQuery({
    queryKey: ["postReview"],
    queryFn: fetchPostReview,
  });
