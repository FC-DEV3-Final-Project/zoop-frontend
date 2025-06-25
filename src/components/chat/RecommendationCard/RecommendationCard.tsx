import React, { useEffect, useState } from "react";

import { Carousel, CarouselApi } from "@/components/ui/carousel";
import MapViewer from "@/components/mapPropertyListDialog/MapViewer";
import MapListDialog from "@/components/mapPropertyListDialog/MapListDialog";

import RecommendationHeader from "./RecommendationHeader";
import RecommendationList from "./RecommendationList";
import RecommendationDots from "./RecommendationDots";

import { MapPropertyItem } from "@/types/map";
import { useMarkerPositions } from "@/hooks/common/useMarkerPositions";

const RecommendationCard = ({
  properties,
  title,
}: {
  properties: MapPropertyItem[];
  title: string;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const markerPositions = useMarkerPositions(properties);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <div>
        <RecommendationHeader setIsMapOpen={setIsMapOpen} />
        <div className="rounded-b-2xl bg-white">
          <div className="px-3 py-[10px]">
            <div className="flex h-[196px] items-center justify-center bg-gray-050 text-black">
              <MapViewer markerPoint={markerPositions} />
            </div>
          </div>
          <RecommendationList properties={properties} />
          <RecommendationDots count={properties.length} current={current} />
        </div>
      </div>
      {isMapOpen && (
        <MapListDialog
          open={isMapOpen}
          onOpenChange={setIsMapOpen}
          properties={properties}
          title={title}
        />
      )}
    </Carousel>
  );
};

export default RecommendationCard;
