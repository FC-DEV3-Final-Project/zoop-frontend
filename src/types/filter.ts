// 백엔드 전송용 장소 정보 타입
export interface SelectedPlaceInfo {
  x: string; // 경도
  y: string; // 위도
  bCode: string; // 법정 코드
  hCode: string; // 행정 코드
  placeName: string; // 장소명
}

// 카카오 API 응답 타입
export interface KakaoPlace {
  id: string; // 장소 ID
  place_name: string; // 장소명, 업체명
  address_name: string; // 전체 지번 주소
  road_address_name: string; // 전체 도로명 주소
  x: string; // 경도
  y: string; // 위도
}

// 저장될 지역 설정 타입
export interface LocationStepData {
  searchKeyword: string;
  searchResults: KakaoPlace[];
  selectedPlace: SelectedPlaceInfo | null;
}

export interface FilterPayload {
  chatRoomId: number;
  filters: {
    x: string;
    y: string;
    bCode: string;
    hCode: string;
    placeName: string;
    tradeTypeName: "월세" | "전세" | "매매";
    realEstateTypeName: string[];
    dealOrWarrantPrc: number;
    rentPrice: number;
  };
}

export type TradeType = "월세" | "전세" | "매매";
export type RealEstateType = "원룸 / 투룸" | "아파트" | "오피스텔" | "빌라";
