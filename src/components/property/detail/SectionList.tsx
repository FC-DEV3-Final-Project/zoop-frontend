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
}

const SectionList = ({ sectionRefs }: SectionListProps) => {
  return (
    <div className="flex flex-col bg-gray-100">
      <DealSection ref={sectionRefs["deal"]} />
      <InfoSection ref={sectionRefs["info"]} />
      <FacilitySection ref={sectionRefs["facility"]} />
      <LocationSection ref={sectionRefs["location"]} />
      <DescriptionSection ref={sectionRefs["description"]} />
      <AgentSection ref={sectionRefs["agent"]} />
    </div>
  );
};

export default SectionList;
