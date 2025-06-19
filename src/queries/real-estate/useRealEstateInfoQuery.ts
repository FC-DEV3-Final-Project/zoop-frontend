import { useQuery } from "@tanstack/react-query";
import fetchRealEstateInfo, { RealEstateInfoRequest } from "@/apis/real-estate/fetchRealEstateInfo";

export const useRealEstateInfoQuery = (
  propertyId: number,
  requestData: RealEstateInfoRequest,
  enabled: boolean = true,
) => {
  return useQuery({
    queryKey: ["realEstateInfo", propertyId, requestData],
    queryFn: () => fetchRealEstateInfo(propertyId, requestData),
    enabled,
  });
};
