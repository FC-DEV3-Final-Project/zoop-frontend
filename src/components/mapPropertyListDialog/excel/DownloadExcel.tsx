import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import React from "react";
import { normalizeValue, translateData } from "./utils/translateData";
import { columnMapping } from "./utils/columnMapping";
import { ExcelPropertyItem } from "@/types/map";

// 엑셀 다운로드 컴포넌트
const DownloadExcel = ({ data }: { data: ExcelPropertyItem[] }) => {
  const handleDownload = () => {
    const keys = Object.keys(columnMapping) as (keyof ExcelPropertyItem)[];

    const rows: any[][] = [];

    keys.forEach((key) => {
      const label = columnMapping[key];
      const row = [label, ...data.map((item) => normalizeValue(item[key]))];
      rows.push(row);
    });

    // 엑셀 워크북/시트 구성
    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "매물정보");

    // 파일 생성 및 다운로드
    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "test매물정보.xlsx");
  };
  return (
    <button>
      <img src="/icons/excel.svg" alt="엑셀 다운" className="h-6 w-6" onClick={handleDownload} />
    </button>
  );
};

export default DownloadExcel;
