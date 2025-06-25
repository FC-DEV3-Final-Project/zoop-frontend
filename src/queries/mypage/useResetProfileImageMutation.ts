import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchResetProfileImage from "@/apis/mypage/fetchResetProfileImage";

export const useResetProfileImageMutation = (options?: {
  onSuccess?: (data: string) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchResetProfileImage,
    onSuccess: (data) => {
      // userInfo 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });

      // 로컬스토리지 업데이트
      const stored = localStorage.getItem("userInfo-storage");
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.state.user.profileImage = data;
        localStorage.setItem("userInfo-storage", JSON.stringify(parsed));
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      console.error("프로필 이미지 초기화 실패:", error);
      options?.onError?.(error);
    },
  });
};
