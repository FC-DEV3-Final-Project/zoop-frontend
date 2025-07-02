import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { PropertyInfoProps } from "@/types/propertyDetail";

export const usePropertyInfoQuery = (propertyId: number) => {
  const fetchPropertyInfo = async (): Promise<PropertyInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/property_info`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["propertyInfo", propertyId],
    queryFn: fetchPropertyInfo,
    enabled: !!propertyId,
  });
};
