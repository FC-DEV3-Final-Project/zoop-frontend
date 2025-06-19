import axiosInstance from "@/apis/utils/axiosInstance";

const fetchWithdraw = async (reason: string): Promise<boolean> => {
  try {
    const response = await axiosInstance.delete("/mypage/withdraw", {
      data: { withdrawReason: reason },
    });
    return response.status === 200;
  } catch (error) {
    console.error("fetchWithdraw 에러:", error);
    throw error;
  }
};

export default fetchWithdraw;
