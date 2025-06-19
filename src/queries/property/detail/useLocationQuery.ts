import { useQuery } from "@tanstack/react-query";
import { fetchLocation } from "@/apis/property/detail/fetchLocation";

export const useLocationQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["location", propertyId],
    queryFn: () => fetchLocation(propertyId),
    enabled: !!propertyId,
  });
};
