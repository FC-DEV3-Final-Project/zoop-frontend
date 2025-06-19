import axiosInstance from "@/apis/utils/axiosInstance";

export type BasicInfo = {
  propertyId: number;
  complexId: number;
  tradeTypeName: string;
  articleName: string;
  dealPrice: number;
  dealOrWarrantPrc: string;
  articleFeatureDesc: string;
  realEstateTypeName: string;
  area2: string;
  correspondingFloorCount: string;
  parkingPossibleYN: "Y" | "N";
  isBookmarked: boolean;
  exposeStartYMD: string;
  summary: string[];
  images: {
    imageUrl: string;
    imageType: string;
    imageOrder: number;
    isMain: boolean;
  }[];
};

export const fetchBasicInfo = async (propertyId: number): Promise<BasicInfo> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/basic_info`);
  return res.data.data;
};
