import { useRef } from "react";
import ScrollableTabBar from "@/components/property/detail/ScrollableTabBar";
import SectionList from "@/components/property/detail/SectionList";

type SectionKey = "deal" | "info" | "facility" | "location" | "description" | "agent";

const ScrollableSection = () => {
  const sectionRefs: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
    deal: useRef(null),
    info: useRef(null),
    facility: useRef(null),
    location: useRef(null),
    description: useRef(null),
    agent: useRef(null),
  };

  const handleTabClick = (section: SectionKey) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <ScrollableTabBar onSelect={handleTabClick as (value: string) => void} />
      <SectionList sectionRefs={sectionRefs} />
    </div>
  );
};

export default ScrollableSection;
