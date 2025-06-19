import axiosInstance from "@/apis/utils/axiosInstance";

export type AgentInfo = {
  propertyId: number;
  realtorName: string;
  representativeName: string;
  establishRegistrationNo: string;
  address: string;
  representativeTelNo: string;
  cellPhoneNo: string;
};

export const fetchAgent = async (propertyId: number): Promise<AgentInfo> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/agent`);
  return res.data.data;
};
