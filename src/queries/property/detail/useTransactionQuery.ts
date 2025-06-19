import { useQuery } from "@tanstack/react-query";
import { fetchTransaction } from "@/apis/property/detail/fetchTransaction";

export const useTransactionQuery = (propertyId: number) => {
  return useQuery({
    queryKey: ["transaction", propertyId],
    queryFn: () => fetchTransaction(propertyId),
    enabled: !!propertyId,
  });
};
