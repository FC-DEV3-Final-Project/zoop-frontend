import axiosInstance from "@/apis/utils/axiosInstance";
import { LocationInfoProps } from "@/types/propertyDetail";

export const fetchLocation = async (propertyId: number): Promise<LocationInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/location`);
  return res.data.data;
};
