export type DescriptionData = {
  propertyId: number;
  articleFeatureDescription: string;
  detailDescription: string;
};

export const fetchDescription = async (propertyId: number): Promise<DescriptionData> => {
  const res = await fetch(`/properties/${propertyId}/description`);
  if (!res.ok) throw new Error("상세설명 조회 실패");
  const json = await res.json();
  return json.data;
};
