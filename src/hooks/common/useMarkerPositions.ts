import { useMemo, useEffect } from "react";
import { MapPropertyItem } from "@/types/map";

export const useMarkerPositions = (propertyList: MapPropertyItem[]) => {
  const markerPositions = useMemo(
    () =>
      propertyList.map(({ order, propertyId, latitude, longitude }) => ({
        order,
        propertyId,
        latitude,
        longitude,
      })),
    [propertyList],
  );

  return markerPositions;
};
