"use client";

import { useRef, useEffect, useState } from "react";
import ScrollableTabBar from "@/components/property/detail/ScrollableTabBar";
import SectionList from "@/components/property/detail/SectionList";

type SectionKey = "deal" | "info" | "facility" | "location" | "description" | "agent";

interface ScrollableSectionProps {
  propertyId: number;
}

const ScrollableSection = ({ propertyId }: ScrollableSectionProps) => {
  const sectionRefs: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
    deal: useRef<HTMLElement>(null),
    info: useRef<HTMLElement>(null),
    facility: useRef<HTMLElement>(null),
    location: useRef<HTMLElement>(null),
    description: useRef<HTMLElement>(null),
    agent: useRef<HTMLElement>(null),
  };

  const [activeSection, setActiveSection] = useState<SectionKey>("deal");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionKey);
        }
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "-120px 0px -40% 0px",
      },
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (section: SectionKey) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <ScrollableTabBar
        selected={activeSection}
        onSelect={handleTabClick as (value: string) => void}
      />
      <SectionList sectionRefs={sectionRefs} propertyId={propertyId} />
    </div>
  );
};

export default ScrollableSection;
