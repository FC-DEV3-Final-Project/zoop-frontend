import { useMutation } from "@tanstack/react-query";
import { postChatFilterSettings } from "@/apis/filter/postChatFilterSettings";
import { FilterPayload } from "@/types/filter";

export const usePostChatFilterSettingsMutation = () => {
  return useMutation({
    mutationFn: (payload: FilterPayload) => postChatFilterSettings(payload),
  });
};
