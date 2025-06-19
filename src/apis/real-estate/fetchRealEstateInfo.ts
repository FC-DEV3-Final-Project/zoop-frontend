import axiosInstance from "../utils/axiosInstance";

type RealEstateInfoRequest = {
  realtyId: number;
};

type RealEstateInfoResponse = {
  data: {
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
  };
  status: number;
  message: string;
};

const fetchRealEstateInfo = async (
  propertyId: number,
  requestData: RealEstateInfoRequest,
): Promise<RealEstateInfoResponse> => {
  try {
    // 실제 api 호출
    const response = await axiosInstance.post(`/properties/${propertyId}/realty`, requestData);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("fetchRealEstateInfo 에러:", error);
    throw error;
  }
};

export default fetchRealEstateInfo;
export type { RealEstateInfoRequest, RealEstateInfoResponse };
