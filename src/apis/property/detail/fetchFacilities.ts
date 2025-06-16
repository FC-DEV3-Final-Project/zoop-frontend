export type FacilitiesProps = {
  propertyId: number;
  heatMethodTypeName: string;
  securityFacilities: string[];
  lifeFacilities: string[];
  etcFacilities: string[];
};

export const fetchFacilities = async (propertyId: number): Promise<FacilitiesProps> => {
  const res = await fetch(`/properties/${propertyId}/facilities`);
  if (!res.ok) throw new Error("시설정보 조회 실패");
  const json = await res.json();
  return json.data;
};
