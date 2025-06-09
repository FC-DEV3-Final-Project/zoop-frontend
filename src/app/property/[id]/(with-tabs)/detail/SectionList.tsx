import AgentSection from "./section/AgentSection";
import DealSection from "./section/DealSection";
import DescriptionSection from "./section/DescriptionSection";
import InfoSection from "./section/InfoSection";
import LocationSection from "./section/LocationSection";
import FacilitySection from "./section/FacilitySection";

export default function SectionList() {
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
}
