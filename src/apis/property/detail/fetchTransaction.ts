import axiosInstance from "@/apis/utils/axiosInstance";

export type DealProps = {
  tradeTypeName: "전세" | "매매" | "월세";
  warrantPrice?: number;
  rentPrice?: number;
  dealPrice?: number;
  dealOrWarrantPrc: string;
  etcFeeAmount: number;
  financePrice: number;
  moveInPossibleYmd: string;
};

export const fetchTransaction = async (propertyId: number): Promise<DealProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/transaction`);
  return res.data.data;
};
