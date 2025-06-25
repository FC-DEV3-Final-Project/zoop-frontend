import { useQuery } from "@tanstack/react-query";
import { fetchPropertyInfo } from "@/apis/property/detail/fetchPropertyInfo";

export const usePropertyInfoQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["propertyInfo", propertyId],
    queryFn: () => fetchPropertyInfo(propertyId),
    enabled: !!propertyId,
  });
};
