export type BasicInfo = {
  propertyId: number;
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
  const res = await fetch(`/properties/${propertyId}/basic_info`);
  if (!res.ok) throw new Error("기본 정보 조회 실패");
  const json = await res.json();
  return json.data;
};
