import axiosInstance from "@/apis/utils/axiosInstance";
import { DescriptionInfoProps } from "@/types/propertyDetail";

export const fetchDescription = async (propertyId: number): Promise<DescriptionInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/description`);
  return res.data.data;
};
