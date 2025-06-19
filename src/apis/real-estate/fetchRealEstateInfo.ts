import axiosInstance from "../utils/axiosInstance";
import { RealEstateInfoRequest, RealEstateInfoResponse } from "@/types/real-estate";

const fetchRealEstateInfo = async (
  propertyId: number,
  requestData: RealEstateInfoRequest,
): Promise<RealEstateInfoResponse> => {
  try {
    // 실제 api 호출
    const response = await axiosInstance.post(`/properties/${propertyId}/realty`, requestData);
    return response.data;
  } catch (error) {
    console.error("fetchRealEstateInfo 에러:", error);
    throw error;
  }
};

export default fetchRealEstateInfo;
