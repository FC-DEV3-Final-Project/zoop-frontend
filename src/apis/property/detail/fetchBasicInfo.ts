import axiosInstance from "@/apis/utils/axiosInstance";
import { BasicInfoProps } from "@/types/propertyDetail";

export const fetchBasicInfo = async (propertyId: number): Promise<BasicInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/basic_info`);
  return res.data.data;
};
