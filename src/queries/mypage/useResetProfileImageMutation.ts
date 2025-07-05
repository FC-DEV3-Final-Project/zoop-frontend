import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchResetProfileImage = async (): Promise<string> => {
  const formData = new FormData();
  
    const response = await axiosInstance.patch("/mypage/profile-image/reset", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  // 성공 시 profileImageUrl 반환
  return response.data.data.profileImageUrl;
};

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
  });
};
