import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { BasicInfoProps } from "@/types/propertyDetail";

export const useBasicInfoQuery = (propertyId: number) => {
  const fetchBasicInfo = async (): Promise<BasicInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/basic_info`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["basicInfo", propertyId],
    queryFn: fetchBasicInfo,
    enabled: !!propertyId,
  });
};
