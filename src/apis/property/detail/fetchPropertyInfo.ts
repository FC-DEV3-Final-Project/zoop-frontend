import axiosInstance from "@/apis/utils/axiosInstance";
import { PropertyInfoProps } from "@/types/propertyDetail";

export const fetchPropertyInfo = async (propertyId: number): Promise<PropertyInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/property_info`);
  return res.data.data;
};
