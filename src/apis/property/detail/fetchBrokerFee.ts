export type BrokerFeeInfo = {
  propertyId: number;
  maxBrokerFee: number;
  brokerFee: number;
  acquisitionTax: number;
  specialTax: number;
};

export const fetchBrokerFee = async (propertyId: number): Promise<BrokerFeeInfo> => {
  const res = await fetch(`/properties/${propertyId}/broker_fee`);
  if (!res.ok) throw new Error("중개보수 조회 실패");
  const json = await res.json();
  return json.data;
};
