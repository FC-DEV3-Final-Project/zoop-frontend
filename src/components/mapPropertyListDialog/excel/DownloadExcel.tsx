import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { normalizeValue } from "./utils/translateData";
import { columnMapping } from "./utils/columnMapping";
import { MapPropertyItem } from "@/types/map";
import { getMapBookmarkPropertyList } from "@/apis/map/getMapBookmarkPropertyList";
import { getMapRecentPropertyList } from "@/apis/map/getMapRecentPropertyList";

interface DownloadExcelProps {
  data: MapPropertyItem[];
  type?: "bookmark" | "recentView";
}

const DownloadExcel = ({ data, type }: DownloadExcelProps) => {
  const [excelData, setExcelData] = useState<MapPropertyItem[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (type === "bookmark") {
  //       console.log("나는 북마크");
  //       const bookmarkData = await getMapBookmarkPropertyList();
  //       setExcelData(bookmarkData);
  //     } else if (type === "recentView") {
  //       console.log("나는 최근봄");
  //       const recentData = await getMapRecentPropertyList();
  //       setExcelData(recentData);
  //     } else {
  //       setExcelData(data ?? []);
  //     }
  //   };

  //   fetchData();
  // }, [type, data]);

  const handleDownload = () => {
    if (!Array.isArray(excelData) || excelData.length === 0) {
      alert("다운로드할 데이터가 없습니다.");
      return;
    }

    const keys = Object.keys(columnMapping) as (keyof MapPropertyItem)[];
    const rows: any[][] = [];

    keys.forEach((key) => {
      const label = columnMapping[key];
      const row = [label, ...excelData.map((item) => normalizeValue(item[key]))];
      rows.push(row);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "매물정보");

    const buffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const fileName =
      type === "bookmark"
        ? "북마크_매물정보.xlsx"
        : type === "recentView"
          ? "최근본매물_매물정보.xlsx"
          : "전체_매물정보.xlsx";

    saveAs(blob, fileName);
  };

  return (
    <button onClick={handleDownload} aria-label="엑셀 다운로드" title="엑셀 다운로드">
      <img src="/icons/excel.svg" alt="엑셀 다운로드 아이콘" className="h-6 w-6" />
    </button>
  );
};

export default DownloadExcel;
