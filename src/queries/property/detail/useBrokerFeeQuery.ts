import { useQuery } from "@tanstack/react-query";
import { fetchBrokerFee } from "@/apis/property/detail/fetchBrokerFee";

export const useBrokerFeeQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["brokerFee", propertyId],
    queryFn: () => fetchBrokerFee(propertyId),
    enabled: !!propertyId,
  });
};
