import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { AgentInfoProps } from "@/types/propertyDetail";

export const useAgentQuery = (propertyId: number) => {
  const fetchAgent = async (): Promise<AgentInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/agent`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["agent", propertyId],
    queryFn: fetchAgent,
    enabled: !!propertyId,
  });
};
