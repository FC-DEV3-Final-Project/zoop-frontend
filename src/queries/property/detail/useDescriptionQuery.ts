import { useQuery } from "@tanstack/react-query";
import { fetchDescription } from "@/apis/property/detail/fetchDescription";

export const useDescriptionQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["description", propertyId],
    queryFn: () => fetchDescription(propertyId),
    enabled: !!propertyId,
  });
};
