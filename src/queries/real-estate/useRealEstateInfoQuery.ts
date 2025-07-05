import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { RealEstateInfoResponse } from "@/types/real-estate";

const fetchRealEstateInfo = async (
  propertyId: number,
): Promise<RealEstateInfoResponse> => {
  const response = await axiosInstance.get(`/properties/${propertyId}/realty`, {
  });
  return response.data;
};

export const useRealEstateInfoQuery = (
  propertyId: number,
  enabled: boolean = true,
) => {
  return useQuery({
    queryKey: ["realEstateInfo", propertyId],
    queryFn: () => fetchRealEstateInfo(propertyId),
    enabled,
  });
};