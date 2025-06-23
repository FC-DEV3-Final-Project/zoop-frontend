export const mapHousingTypeToCode = (housingTypes: string[]): string[] => {
  const housingTypeMap: Record<string, string> = {
    "원룸 / 투룸": "DDDGG:DSD",
    "아파트": "APT",
    "오피스텔": "OPST",
    "빌라": "VL:YR",
  };

  return housingTypes
    .map((name) => housingTypeMap[name])
    .filter((code): code is string => Boolean(code));
};

export const mapTradeTypeToCode = (tradeTypes: string[]): string[] => {
  const tradeTypeMap: Record<string, string> = {
    월세: "B2",
    전세: "B1",
    매매: "AI",
  };

  return tradeTypes.map((name) => tradeTypeMap[name] || "");
};
