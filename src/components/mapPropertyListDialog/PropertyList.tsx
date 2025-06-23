import PropertyCard, { PropertyCardProps } from "../common/PropertyCard";

const PropertyList = ({ properties }: { properties: PropertyCardProps[] }) => (
  <div
    className="flex flex-col overflow-y-auto"
    style={{ maxHeight: "calc(100vh - 339px - 46px - 52px)" }}
  >
    {properties.map((property, index) => (
      <div key={property.propertyId}>
        <PropertyCard
          key={property.propertyId}
          propertyId={property.propertyId}
          order={index + 1}
          tradeTypeName={property.tradeTypeName}
          summary={property.summary || []}
          realEstateTypeName={property.realEstateTypeName}
          dealOrWarrantPrc={property.dealOrWarrantPrc}
          buildingName={property.buildingName}
          area2={property.area2}
          isBookmarked={true}
          imageUrl={property.imageUrl}
          rentPrice={property.rentPrice || undefined}
          aptName={property.aptName}
          articleName={property.articleName}
        />
      </div>
    ))}
  </div>
);

export default PropertyList;
