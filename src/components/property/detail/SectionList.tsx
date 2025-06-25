import { RefObject } from "react";
import AgentSection from "@/components/property/detail/section/AgentSection";
import DealSection from "@/components/property/detail/section/DealSection";
import DescriptionSection from "@/components/property/detail/section/DescriptionSection";
import InfoSection from "@/components/property/detail/section/InfoSection";
import LocationSection from "@/components/property/detail/section/LocationSection";
import FacilitySection from "@/components/property/detail/section/FacilitySection";

type SectionKey = "deal" | "info" | "facility" | "location" | "description" | "agent";

interface SectionListProps {
  sectionRefs: Record<SectionKey, RefObject<HTMLElement | null>>;
  propertyId: number;
}

const SectionList = ({ sectionRefs, propertyId }: SectionListProps) => {
  return (
    <div className="flex flex-col bg-gray-100">
      <DealSection ref={sectionRefs["deal"]} propertyId={propertyId} />
      <InfoSection ref={sectionRefs["info"]} propertyId={propertyId} />
      <FacilitySection ref={sectionRefs["facility"]} propertyId={propertyId} />
      <LocationSection ref={sectionRefs["location"]} propertyId={propertyId} />
      <DescriptionSection ref={sectionRefs["description"]} propertyId={propertyId} />
      <AgentSection ref={sectionRefs["agent"]} propertyId={propertyId} />
    </div>
  );
};

export default SectionList;
