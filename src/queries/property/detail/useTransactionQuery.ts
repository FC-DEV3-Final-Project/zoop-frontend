import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { DealInfoProps } from "@/types/propertyDetail";

export const useTransactionQuery = (propertyId: number) => {
  const fetchTransaction = async (): Promise<DealInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/transaction`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["transaction", propertyId],
    queryFn: fetchTransaction,
    enabled: !!propertyId,
  });
};
