import { useQuery } from "@tanstack/react-query";
import { fetchFacilities } from "@/apis/property/detail/fetchFacilities";

export const useFacilitiesQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["facilities", propertyId],
    queryFn: () => fetchFacilities(propertyId),
    enabled: !!propertyId,
  });
};
