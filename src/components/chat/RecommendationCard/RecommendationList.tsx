import PropertyCard from "@/components/common/PropertyCard";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Props {
  properties: any[];
}

const RecommendationList = ({ properties }: Props) => {
  return (
    <CarouselContent>
      {properties.map((property) => (
        <CarouselItem key={property.propertyId}>
          <PropertyCard
            order={property.order}
            propertyId={property.propertyId}
            tradeTypeName={property.tradeTypeName}
            rentPrice={property.rentPrice}
            dealOrWarrantPrc={property.dealOrWarrantPrc}
            summary={property.tagList}
            articleName={property.articleName}
            realEstateTypeName={property.realEstateTypeName}
            buildingName={""} // 필수
            area2={String(property.netArea)}
            isBookmarked={false}
            imageUrl={property.imageUrl ?? ""}
            isNumberVisible={false}
            size="sm"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

export default RecommendationList;
