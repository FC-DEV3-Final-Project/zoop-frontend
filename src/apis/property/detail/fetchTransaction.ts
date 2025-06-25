import axiosInstance from "@/apis/utils/axiosInstance";
import { DealInfoProps } from "@/types/propertyDetail";

export const fetchTransaction = async (propertyId: number): Promise<DealInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/transaction`);
  return res.data.data;
};
