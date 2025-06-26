import axiosInstance from "../utils/axiosInstance";
import { RealEstateInfoRequest, RealEstateInfoResponse } from "@/types/real-estate";

const fetchRealEstateInfo = async (
  propertyId: number,
): Promise<RealEstateInfoResponse> => {
  const response = await axiosInstance.get(`/properties/${propertyId}/realty`, {
  });
  return response.data;
};

export default fetchRealEstateInfo;
