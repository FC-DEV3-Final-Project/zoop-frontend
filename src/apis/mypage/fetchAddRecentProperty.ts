import axiosInstance from "../utils/axiosInstance";

interface AddRecentPropertyRequest {
  propertyId: number;
}

interface AddRecentPropertyResponse {
  status: number;
  message: string;
}

const fetchAddRecentProperty = async (propertyId: number): Promise<AddRecentPropertyResponse> => {
  try {
    const response = await axiosInstance.post(`/mypage/histories/recent-properties/${propertyId}`, {
      propertyId,
    });
    return response.data;
  } catch (error) {
    console.error("fetchAddRecentProperty 에러:", error);
    throw error;
  }
};

export default fetchAddRecentProperty;
export type { AddRecentPropertyRequest, AddRecentPropertyResponse };
