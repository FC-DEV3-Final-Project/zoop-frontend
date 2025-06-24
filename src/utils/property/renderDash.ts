export const renderTextOrDash = (text: string | undefined | null): string => {
  return text && text.trim().length > 0 ? text : "-";
};

export const renderListOrDash = (items: string[] | undefined | null): string => {
  return items && items.length > 0 ? items.join(", ") : "-";
};
