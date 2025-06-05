import InfoBox from "./InfoBox";
import ScrollableTabBar from "./ScrollableTabBar";
import SectionList from "./SectionList";

interface DetailTabProps {
  id: string;
}

export default function PropertyDetailTab({ id }: { id: string }) {
  return (
    <div className="flex flex-col gap-2">
      <InfoBox itemId={Number(id)} />
      <ScrollableTabBar />
      <SectionList />
    </div>
  );
}
