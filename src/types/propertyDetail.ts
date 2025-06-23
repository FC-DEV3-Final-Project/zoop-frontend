export type AgentInfoProps = {
  propertyId: number;
  realtorName: string;
  representativeName: string;
  establishRegistrationNo: string;
  address: string;
  representativeTelNo: string;
  cellPhoneNo: string;
};

export type BasicInfoProps = {
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

export type BrokerFeeInfoProps = {
  propertyId: number;
  maxBrokerFee: number;
  brokerFee: number;
  acquisitionTax: number;
  specialTax: number;
};

export type DescriptionInfoProps = {
  propertyId: number;
  articleFeatureDescription: string;
  detailDescription: string;
};

export type FacilityInfoProps = {
  propertyId: number;
  heatMethodTypeName: string;
  securityFacilities: string[];
  lifeFacilities: string[];
  etcFacilities: string[];
};

export type LocationInfoProps = {
  propertyId: number;
  exposureAddress: string;
  latitude: number;
  longitude: number;
};

export type PropertyInfoProps = {
  propertyId: number;
  area1: string;
  area2: string;
  principalUse?: string; // 아파트
  realEstateTypeName?: string; // 빌라
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

export type DealInfoProps = {
  tradeTypeName: "전세" | "매매" | "월세";
  warrantPrice?: number;
  rentPrice?: number;
  dealPrice?: number;
  dealOrWarrantPrc: string;
  etcFeeAmount: number;
  financePrice: number;
  moveInPossibleYmd: string;
};

export interface BookmarkProps {
  propertyId: number;
  isBookmarked: boolean;
}
