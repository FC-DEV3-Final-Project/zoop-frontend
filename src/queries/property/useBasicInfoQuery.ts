import { useQuery } from "@tanstack/react-query";
import { fetchBasicInfo } from "@/apis/property/detail/fetchBasicInfo";

export const useBasicInfoQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["basicInfo", propertyId],
    queryFn: () => fetchBasicInfo(propertyId),
  });
};
