import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import PropertyCard from "../common/PropertyCard";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ArrowRight from "../../../public/icons/arrow-right-gray.svg";

const dummyDate = [
  {
    order: 1,
    propertyId: 98,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "올수리", "소형평수", "방두개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 32,
    imageUrl: null,
    latitude: 37.477824,
    longitude: 127.058528,
  },
  {
    order: 2,
    propertyId: 109,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "소형평수", "방세개", "화장실한개"],
    articleName: "단독",
    realEstateTypeName: "단독/다가구",
    netArea: 31,
    imageUrl: null,
    latitude: 37.483182,
    longitude: 127.062009,
  },
  {
    order: 3,
    propertyId: 149,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "500",
    tagList: ["25년이상", "역세권", "방두개", "화장실한개"],
    articleName: "단독",
    realEstateTypeName: "단독/다가구",
    netArea: 45,
    imageUrl: null,
    latitude: 37.484044,
    longitude: 127.060508,
  },
  {
    order: 4,
    propertyId: 411,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "소형평수", "방세개", "화장실한개"],
    articleName: "단독",
    realEstateTypeName: "단독/다가구",
    netArea: 31,
    imageUrl: null,
    latitude: 37.483182,
    longitude: 127.062009,
  },
  {
    order: 5,
    propertyId: 412,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "융자금없는", "소형평수", "화장실한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 18,
    imageUrl:
      "https://landthumb-phinf.pstatic.net/20250610_278/1749536795090vzlUC_JPEG/13813312_20232710134217.jpg",
    latitude: 37.478901,
    longitude: 127.044968,
  },
  {
    order: 6,
    propertyId: 413,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "소형평수", "방한개", "화장실한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 20,
    imageUrl: null,
    latitude: 37.483698,
    longitude: 127.061416,
  },
  {
    order: 7,
    propertyId: 414,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "융자금적은", "소형평수", "방한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 21,
    imageUrl: null,
    latitude: 37.478073,
    longitude: 127.050774,
  },
  {
    order: 8,
    propertyId: 415,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "화장실한개", "소형평수", "방한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 28,
    imageUrl: null,
    latitude: 37.479387,
    longitude: 127.045437,
  },
  {
    order: 9,
    propertyId: 416,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "화장실한개", "소형평수", "방한개"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 19,
    imageUrl: null,
    latitude: 0,
    longitude: 0,
  },
  {
    order: 10,
    propertyId: 417,
    tradeTypeName: "월세",
    rentPrice: 60,
    warrantPrice: 1000,
    dealPrice: 0,
    dealOrWarrantPrc: "1,000",
    tagList: ["25년이상", "융자금적은", "화장실한개", "소형평수"],
    articleName: "다가구",
    realEstateTypeName: "단독/다가구",
    netArea: 19,
    imageUrl: null,
    latitude: 37.478189,
    longitude: 127.046344,
  },
];

const RecommendationCard = () => {
  const router = useRouter();

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <div>
        <div className="flex justify-between rounded-b-none rounded-t-2xl bg-blue-050-bg px-3 py-[10px]">
          <h1 className="text-subtitle4 text-blue-800-primary">AI 추천 매물</h1>
          <span className="flex items-center justify-center gap-1">
            <button
              onClick={() => router.push("/")}
              className="flex items-center text-center text-body3 leading-none text-gray-800"
            >
              자세히 보기
            </button>
            <Image src={ArrowRight} alt="자세히 보기" />
          </span>
        </div>
        <div className="rounded-b-2xl bg-white">
          <div className="px-3 py-[10px]">지도</div>
          <CarouselContent>
            {dummyDate.map((property) => (
              <CarouselItem key={property.propertyId}>
                <PropertyCard
                  propertyId={property.propertyId}
                  order={property.order}
                  tradeTypeName={property.tradeTypeName}
                  summary={property.tagList}
                  realEstateTypeName={""}
                  dealOrWarrantPrc={property.dealOrWarrantPrc}
                  aptName={""}
                  articleName={property.articleName}
                  buildingName={""}
                  area2={String(property.netArea)}
                  isActive={true}
                  isBookmarked={false}
                  imageUrl={property.imageUrl ?? ""}
                  isNumberVisible={false}
                  size="sm"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full justify-center gap-1 pb-3 pt-1">
            {Array.from({ length: count }).map((_, idx) => (
              <div
                key={idx}
                className={
                  idx + 1 === current
                    ? "h-1 w-2 rounded-full bg-gray-950-dark"
                    : "h-1 w-1 rounded-full bg-gray-500-alternative"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default RecommendationCard;
