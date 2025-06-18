import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview, ReviewRequestBody } from "@/apis/property/review/postReview";

export const usePostReviewMutation = (propertyId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ReviewRequestBody) => postReview(propertyId, body),
    onSuccess: () => {
      // 작성 성공 시 캐시 무효화 → 다시 조회
      queryClient.invalidateQueries({
        queryKey: ["reviewList", propertyId],
      });
    },
  });
};
