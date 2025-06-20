// 부동산 정보 요청 타입
export interface RealEstateInfoRequest {
  realtyId: number;
}

// 부동산 정보 응답 데이터 타입
export interface RealEstateInfoData {
  realtyId: number;
  realtorName: string;
  establishRegistrationNo: string;
  address: string;
  representativeTelNo: string;
  cellPhoneNo: string;
  dealCount: number;
  leaseCount: number;
  rentCount: number;
  representativeName: string;
}

// 부동산 정보 API 응답 타입
export interface RealEstateInfoResponse {
  data: RealEstateInfoData;
  status: number;
  message: string;
}

// // 탭 옵션 타입
// export interface StatsItem {
//   label: string;
//   value: string;
// }

// 전화번호 정보 타입
export interface PhoneNumber {
  label: string;
  value: string;
}
