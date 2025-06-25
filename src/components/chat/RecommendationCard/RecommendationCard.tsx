import React, { useEffect } from "react";

import { Carousel, CarouselApi } from "@/components/ui/carousel";
import { Property } from "@/types/chat";
import RecommendationHeader from "./RecommendationHeader";
import RecommendationList from "./RecommendationList";
import RecommendationDots from "./RecommendationDots";

const RecommendationCard = ({ properties }: { properties: Property[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

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
        <RecommendationHeader />
        <div className="rounded-b-2xl bg-white">
          <div className="px-3 py-[10px]">지도 자리</div>
          <RecommendationList properties={properties} />
          <RecommendationDots count={properties.length} current={current} />
        </div>
      </div>
    </Carousel>
  );
};

export default RecommendationCard;
