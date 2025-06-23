import axiosInstance from "@/apis/utils/axiosInstance";
import { AgentInfoProps } from "@/types/propertyDetail";

export const fetchAgent = async (propertyId: number): Promise<AgentInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/agent`);
  return res.data.data;
};
