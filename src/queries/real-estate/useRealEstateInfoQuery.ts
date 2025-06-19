import { useQuery } from "@tanstack/react-query";
import fetchRealEstateInfo from "@/apis/real-estate/fetchRealEstateInfo";
import { RealEstateInfoRequest } from "@/types/real-estate";

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
