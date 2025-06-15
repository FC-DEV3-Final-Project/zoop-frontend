export type AgentInfo = {
  propertyId: number;
  realtorName: string;
  representativeName: string;
  establishRegistrationNo: string;
  address: string;
  representativeTelNo: string;
  cellPhoneNo: string;
};

export const fetchAgent = async (propertyId: number): Promise<AgentInfo> => {
  const res = await fetch(`/properties/${propertyId}/agent`);
  if (!res.ok) throw new Error("중개사 정보 조회 실패");
  const json = await res.json();
  return json.data;
};
