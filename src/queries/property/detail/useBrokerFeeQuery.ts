import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { BrokerFeeInfoProps } from "@/types/propertyDetail";

export const useBrokerFeeQuery = (propertyId: number) => {
  const fetchBrokerFee = async (): Promise<BrokerFeeInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/broker_fee`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["brokerFee", propertyId],
    queryFn: fetchBrokerFee,
    enabled: !!propertyId,
  });
};
