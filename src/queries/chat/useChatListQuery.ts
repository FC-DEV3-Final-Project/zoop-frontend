import { useQuery } from "@tanstack/react-query";
import { fetchChatList } from "@/apis/sidebar/fetchChatList";

export const useChatListQuery = () => {
  return useQuery({ queryKey: ["chatList"], queryFn: fetchChatList });
};
