import axiosInstance from "@/apis/utils/axiosInstance";

const fetchUpdateNickname = async (nickname: string): Promise<boolean> => {
  const response = await axiosInstance.patch("/mypage/user-nickname", { nickname });
  return response.status === 200;
};

export default fetchUpdateNickname;
