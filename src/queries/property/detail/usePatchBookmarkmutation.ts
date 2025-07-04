import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { BookmarkProps } from "@/types/propertyDetail";

export const usePatchBookmark = () => {
  const queryClient = useQueryClient();

  const patchBookmark = async (propertyId: number): Promise<BookmarkProps> => {
    const res = await axiosInstance.patch(`/properties/${propertyId}/likes`);
    return res.data.data;
  };

  return useMutation({
    mutationFn: patchBookmark,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["bookmarkStatus", data.propertyId] });
    },
  });
};
