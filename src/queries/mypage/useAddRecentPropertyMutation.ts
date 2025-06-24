import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchAddRecentProperty from "@/apis/mypage/fetchAddRecentProperty";

export const useAddRecentPropertyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (propertyId: number) => fetchAddRecentProperty(propertyId),
    onSuccess: () => {
      // 마이페이지 홈 데이터 무효화하여 최근 본 매물 목록 업데이트
      queryClient.invalidateQueries({ queryKey: ["mypageHome"] });
    },
  });
};
