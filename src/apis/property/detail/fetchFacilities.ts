import axiosInstance from "@/apis/utils/axiosInstance";

export type FacilitiesProps = {
  propertyId: number;
  heatMethodTypeName: string;
  securityFacilities: string[];
  lifeFacilities: string[];
  etcFacilities: string[];
};

export const fetchFacilities = async (propertyId: number): Promise<FacilitiesProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/facilities`);
  return res.data.data;
};
