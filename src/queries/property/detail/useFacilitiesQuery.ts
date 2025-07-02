import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { FacilityInfoProps } from "@/types/propertyDetail";

export const useFacilitiesQuery = (propertyId: number) => {
  const fetchFacilities = async (): Promise<FacilityInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/facilities`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["facilities", propertyId],
    queryFn: fetchFacilities,
    enabled: !!propertyId,
  });
};
