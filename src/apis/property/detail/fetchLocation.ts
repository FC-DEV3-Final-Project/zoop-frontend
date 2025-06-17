export type LocationData = {
  propertyId: number;
  exposureAddress: string;
  latitude: number;
  longitude: number;
};

export const fetchLocation = async (propertyId: number): Promise<LocationData> => {
  const res = await fetch(`/properties/${propertyId}/location`);
  if (!res.ok) throw new Error("위치정보 조회 실패");
  const json = await res.json();
  return json.data;
};
