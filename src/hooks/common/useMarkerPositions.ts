import { useMemo } from "react";
import { MapPropertyItem } from "@/types/map";

export const useMarkerPositions = (propertyList: MapPropertyItem[]) => {
  return useMemo(
    () =>
      propertyList.map(({ order, propertyId, latitude, longitude }) => ({
        order,
        propertyId,
        latitude,
        longitude,
      })),
    [propertyList],
  );
};
