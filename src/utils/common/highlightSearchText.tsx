import React from "react";

export const highlightSearchText = (place_name: string, searchText: string): React.ReactNode => {
  if (!searchText) return place_name;

  const index = place_name.indexOf(searchText);
  if (index === -1) return place_name;

  const before = place_name.slice(0, index);
  const match = place_name.slice(index, index + searchText.length);
  const after = place_name.slice(index + searchText.length);

  return (
    <>
      {before}
      <span className="text-blue-800">{match}</span>
      {after}
    </>
  );
};
