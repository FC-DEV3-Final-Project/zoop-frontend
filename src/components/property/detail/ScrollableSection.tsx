import { useRef, useEffect, useState } from "react";
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
        threshold: 0.3, // 화면의 30% 이상 보여야 active 처리
        rootMargin: "-120px 0px -40% 0px", // 상단은 헤더 공간, 하단은 늦게 반응
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
      <SectionList sectionRefs={sectionRefs} />
    </div>
  );
};

export default ScrollableSection;
