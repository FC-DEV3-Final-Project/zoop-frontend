import axiosInstance from "@/apis/utils/axiosInstance";

export type BrokerFeeInfo = {
  propertyId: number;
  maxBrokerFee: number;
  brokerFee: number;
  acquisitionTax: number;
  specialTax: number;
};

export const fetchBrokerFee = async (propertyId: number): Promise<BrokerFeeInfo> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/broker_fee`);
  return res.data.data;
};
