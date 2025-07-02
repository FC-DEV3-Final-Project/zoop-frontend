import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { LocationInfoProps } from "@/types/propertyDetail";

export const useLocationQuery = (propertyId: number) => {
  const fetchLocation = async (): Promise<LocationInfoProps> => {
    const res = await axiosInstance.get(`/properties/${propertyId}/location`);
    return res.data.data;
  };

  return useQuery({
    queryKey: ["location", propertyId],
    queryFn: fetchLocation,
    enabled: !!propertyId,
  });
};
