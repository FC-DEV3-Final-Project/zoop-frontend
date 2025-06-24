import { ExcelPropertyItem } from "@/types/map";
import { columnMapping } from "./columnMapping";

// 모든 타입을 문자열로 안전하게 변환
export const normalizeValue = (value: unknown): string => {
  if (Array.isArray(value)) return value.join(", ");
  if (value === null || value === undefined || value === "") return "-";
  return String(value);
};

// 한글 컬럼명 + 문자열값으로 변환
export const translateData = (data: ExcelPropertyItem[]) => {
  const keys = Object.keys(columnMapping) as (keyof ExcelPropertyItem)[];
  return data.map((item) => {
    const translated: Record<string, string> = {};
    keys.forEach((key) => {
      const label = columnMapping[key];
      translated[label] = normalizeValue(item[key]);
    });
    return translated;
  });
};
