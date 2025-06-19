import { useQuery } from "@tanstack/react-query";
import fetchMypageHome, { MyPageHomeResponse } from "@/apis/mypage/fetchMypageHome";

export const useMypageHomeQuery = () =>
  useQuery<MyPageHomeResponse>({
    queryKey: ["mypageHome"],
    queryFn: fetchMypageHome,
  });
