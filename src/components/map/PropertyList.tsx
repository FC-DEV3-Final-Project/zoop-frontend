import PropertyCard, { PropertyCardProps } from "../common/PropertyCard";

const PropertyList = ({ properties }: { properties: PropertyCardProps[] }) => (
  <div
    className="flex flex-col overflow-y-auto"
    style={{ maxHeight: "calc(100vh - 339px - 46px - 52px)" }}
  >
    {properties.map((property) => (
      <PropertyCard key={property.propertyId} {...property} />
    ))}
  </div>
);

export default PropertyList;
