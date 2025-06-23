import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBookmark } from "@/apis/property/detail/postBookmark";

export const usePostBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (propertyId: number) => postBookmark(propertyId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["bookmarkStatus", data.propertyId] });
    },
  });
};
