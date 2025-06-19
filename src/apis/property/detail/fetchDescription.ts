import axiosInstance from "@/apis/utils/axiosInstance";

export type DescriptionData = {
  propertyId: number;
  articleFeatureDescription: string;
  detailDescription: string;
};

export const fetchDescription = async (propertyId: number): Promise<DescriptionData> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/description`);
  return res.data.data;
};
