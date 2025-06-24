import axiosInstance from "../utils/axiosInstance";

interface AddRecentPropertyRequest {
  propertyId: number;
}

interface AddRecentPropertyResponse {
  status: number;
  message: string;
}

const fetchAddRecentProperty = async (propertyId: number): Promise<AddRecentPropertyResponse> => {
  const response = await axiosInstance.post(`/mypage/histories/recent-properties`, { propertyId });
  return response.data;
};

export default fetchAddRecentProperty;
export type { AddRecentPropertyRequest, AddRecentPropertyResponse };
