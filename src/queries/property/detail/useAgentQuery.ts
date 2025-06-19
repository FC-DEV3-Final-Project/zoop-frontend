import { useQuery } from "@tanstack/react-query";
import { fetchAgent } from "@/apis/property/detail/fetchAgent";

export const useAgentQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["agent", propertyId],
    queryFn: () => fetchAgent(propertyId),
    enabled: !!propertyId,
  });
};
