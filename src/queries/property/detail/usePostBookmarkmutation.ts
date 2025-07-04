import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { BookmarkProps } from "@/types/propertyDetail";

export const usePostBookmark = () => {
  const queryClient = useQueryClient();

  const postBookmark = async (propertyId: number): Promise<BookmarkProps> => {
    const res = await axiosInstance.post(`/properties/${propertyId}/likes`);
    return res.data.data;
  };

  return useMutation({
    mutationFn: postBookmark,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["bookmarkStatus", data.propertyId] });
    },
  });
};
