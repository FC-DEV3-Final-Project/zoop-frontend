import axiosInstance from "@/apis/utils/axiosInstance";
import { BrokerFeeInfoProps } from "@/types/propertyDetail";

export const fetchBrokerFee = async (propertyId: number): Promise<BrokerFeeInfoProps> => {
  const res = await axiosInstance.get(`/properties/${propertyId}/broker_fee`);
  return res.data.data;
};
