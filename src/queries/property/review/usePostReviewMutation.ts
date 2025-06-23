import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview } from "@/apis/property/review/postReview";
import { ReviewRequestBodyType } from "@/types/reviewType";

export const usePostReviewMutation = (propertyId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ReviewRequestBodyType) => postReview(propertyId, body),
    onSuccess: () => {
      // 작성 성공 시 캐시 무효화 → 다시 조회
      queryClient.invalidateQueries({
        queryKey: ["reviewList", propertyId],
      });
    },
  });
};
