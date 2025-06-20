import React from "react";

export const highlightSearchKeyword = (
  place_name: string,
  searchKeyword: string,
): React.ReactNode => {
  if (!searchKeyword) return place_name;

  const index = place_name.indexOf(searchKeyword);
  if (index === -1) return place_name;

  const before = place_name.slice(0, index);
  const match = place_name.slice(index, index + searchKeyword.length);
  const after = place_name.slice(index + searchKeyword.length);

  return (
    <>
      {before}
      <span className="text-blue-800">{match}</span>
      {after}
    </>
  );
};
