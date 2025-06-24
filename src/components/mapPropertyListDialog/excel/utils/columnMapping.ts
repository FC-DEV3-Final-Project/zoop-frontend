import { ExcelPropertyItem } from "@/types/map";

// 데이터 한글 컬럼명 매핑
export const columnMapping: Record<keyof ExcelPropertyItem, string> = {
  articleName: "매물명",
  tradeTypeName: "거래유형",
  rentPrice: "월세",
  warrantPrice: "보증금",
  dealPrice: "매매가",
  dealOrWarrantPrc: "가격표시",
  summary: "ai 리뷰",
  aptName: "아파트명",
  buildingName: "건물명",
  realEstateTypeName: "부동산유형",
  area2: "공급면적",
  direction: "방향",
  floorInfo: "층정보",
  exposureAddress: "노출주소",
  etcFeeAmount: "관리비",
  moveInPossibleYmd: "입주가능일",
  articleFeatureDesc: "특징요약",
  detailDescription: "상세설명",
};
