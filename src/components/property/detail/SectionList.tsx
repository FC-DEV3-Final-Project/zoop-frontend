import AgentSection from "@/components/property/detail/section/AgentSection";
import DealSection from "@/components/property/detail/section/DealSection";
import DescriptionSection from "@/components/property/detail/section/DescriptionSection";
import InfoSection from "@/components/property/detail/section/InfoSection";
import LocationSection from "@/components/property/detail/section/LocationSection";
import FacilitySection from "@/components/property/detail/section/FacilitySection";

const SectionList = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      <DealSection />
      <InfoSection />
      <FacilitySection />
      <LocationSection />
      <DescriptionSection />
      <AgentSection />
    </div>
  );
};

export default SectionList;
