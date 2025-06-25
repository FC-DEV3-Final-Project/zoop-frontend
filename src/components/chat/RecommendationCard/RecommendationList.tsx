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
            summary={property.summary}
            articleName={property.articleName}
            realEstateTypeName={property.realEstateTypeName}
            buildingName={property.buildingName}
            area2={property.area2}
            isBookmarked={property.isBookmarked}
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
