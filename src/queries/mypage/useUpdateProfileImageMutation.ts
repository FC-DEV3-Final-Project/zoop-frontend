import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchUpdateProfileImage from "@/apis/mypage/fetchUpdateProfileImage";

export const useUpdateProfileImageMutation = (options?: {
  onSuccess?: (data: string) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpdateProfileImage,
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
      options?.onError?.(error);
    },
  });
};
