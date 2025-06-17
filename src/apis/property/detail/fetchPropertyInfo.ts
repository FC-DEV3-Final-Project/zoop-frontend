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
  const res = await fetch(`/properties/${propertyId}/property_info`);
  if (!res.ok) throw new Error("매물 정보 조회 실패");
  const json = await res.json();
  return json.data;
};
