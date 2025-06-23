/** ISO 문자열 → yyyy.MM.dd */
export const formatISODate = (isoString: string): string => {
  const date = new Date(isoString);
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
};

/** 8자리 문자열 yyyymmdd → yyyy.MM.dd */
export const formatYMDDate = (ymd: string | null | undefined): string => {
  if (!ymd || ymd.length !== 8) return "정보 없음";
  return `${ymd.slice(0, 4)}.${ymd.slice(4, 6)}.${ymd.slice(6, 8)}`;
};

/** yyyymmdd → 현재 시간 기준 상대 포맷 */
export const formatRelativeDate = (ymd: string | null | undefined): string => {
  if (!ymd || ymd.length !== 8) return "정보 없음";

  const now = new Date();
  const exposeDate = new Date(
    Number(ymd.slice(0, 4)),
    Number(ymd.slice(4, 6)) - 1,
    Number(ymd.slice(6, 8)),
  );

  const diffTime = now.getTime() - exposeDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  if (diffDays === 0) {
    if (diffHours < 1) return "방금 전";
    return `${diffHours}시간 전`;
  } else if (diffDays === 1) {
    return "어제";
  } else {
    return `${diffDays}일 전`;
  }
};
