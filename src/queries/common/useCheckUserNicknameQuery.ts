import { useQuery } from "@tanstack/react-query";
import fetchCheckUserNickname from "@/apis/common/fetchCheckUserNickname";

export const useCheckUserNicknameQuery = (nickname: string, enabled: boolean = false) =>
  useQuery({
    queryKey: ["checkUserNickname", nickname],
    queryFn: () => fetchCheckUserNickname(nickname),
    enabled: !!nickname && enabled,
  });
