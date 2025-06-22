import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchBookmark } from "@/apis/property/detail/patchBookmark";

export const usePatchBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (propertyId: number) => patchBookmark(propertyId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["bookmarkStatus", data.propertyId] });
    },
  });
};
