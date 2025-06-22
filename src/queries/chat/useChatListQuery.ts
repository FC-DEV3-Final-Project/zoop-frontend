import { useQuery } from "@tanstack/react-query";
import { fetchChatList } from "@/apis/sidebar/fetchChatList";

export const useChatListQuery = (searchText: string) => {
  return useQuery({
    queryKey: ["chatList", searchText],
    queryFn: () => fetchChatList({ searchText }),
    enabled: !!searchText,
  });
};
