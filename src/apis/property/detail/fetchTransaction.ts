export type DealProps = {
  tradeTypeName: "전세" | "매매" | "월세";
  warrantPrice?: number;
  rentPrice?: number;
  dealPrice?: number;
  dealOrWarrantPrc: string;
  etcFeeAmount: number;
  financePrice: number;
  moveInPossibleYmd: string;
};

export const fetchTransaction = async (propertyId: number): Promise<DealProps> => {
  const res = await fetch(`/properties/${propertyId}/transaction`);
  if (!res.ok) throw new Error("거래정보 조회 실패");
  const json = await res.json();
  return json.data;
};
