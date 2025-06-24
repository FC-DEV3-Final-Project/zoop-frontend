import axiosInstance from "@/apis/utils/axiosInstance";

const fetchWithdraw = async (reason: string): Promise<boolean> => {
  const response = await axiosInstance.delete("/mypage/withdraw", {
    data: { withdrawReason: reason },
  });
  return response.status === 200;
};

export default fetchWithdraw;
