import axiosInstance from "@/apis/utils/axiosInstance";

export type PropertyInfoResponse = {
  propertyId: number;
  area1: string;
  area2: string;
  principalUse?: string; // 아파트
  realestateTypeName?: string; // 빌라
  aptName: string;
  buildingName: string;
  floorInfo: string;
  roomCount: string;
  bathroomCount: string;
  directionBaseTypeName: string;
  direction: string;
  entranceTypeName: string;
  householdCount: string;
  parkingCount: string;
  parkingCountPerHousehold: string;
  parkingPossibleYN: "Y" | "N";
  useApproveYmd: string;
  images: {
    imageUrl: string;
    imageType: string;
    imageOrder: number;
    main: boolean;
  }[];
};

export const fetchPropertyInfo = async (propertyId: number): Promise<PropertyInfoResponse> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/property_info`);
  return res.data.data;
};
