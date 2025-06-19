import axiosInstance from "@/apis/utils/axiosInstance";

export type LocationData = {
  propertyId: number;
  exposureAddress: string;
  latitude: number;
  longitude: number;
};

export const fetchLocation = async (propertyId: number): Promise<LocationData> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/location`);
  return res.data.data;
};
