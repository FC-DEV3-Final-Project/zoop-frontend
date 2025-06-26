import { useQuery } from "@tanstack/react-query";
import fetchRealEstateInfo from "@/apis/real-estate/fetchRealEstateInfo";

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
