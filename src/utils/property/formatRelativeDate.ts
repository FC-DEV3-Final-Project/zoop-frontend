export const formatRelativeDate = (ymd: string): string => {
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
