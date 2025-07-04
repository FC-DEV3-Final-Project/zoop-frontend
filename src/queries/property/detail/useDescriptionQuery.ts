import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { DescriptionInfoProps } from "@/types/propertyDetail";

export const useDescriptionQuery = (propertyId: number) => {
  const fetchDescription = async (): Promise<DescriptionInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/description`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["description", propertyId],
    queryFn: fetchDescription,
    enabled: !!propertyId,
  });
};
