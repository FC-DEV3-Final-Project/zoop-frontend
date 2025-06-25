import axiosInstance from "@/apis/utils/axiosInstance";
import { FacilityInfoProps } from "@/types/propertyDetail";

export const fetchFacilities = async (propertyId: number): Promise<FacilityInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/facilities`);
  return res.data.data;
};
