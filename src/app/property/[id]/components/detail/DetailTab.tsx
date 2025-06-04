import InfoBox from "./InfoBox";
import ScrollableTabBar from "./ScrollableTabBar";

export default function PropertyDetailTab({ id }: { id: string }) {
  return (
    <div className="flex flex-col gap-2">
      <InfoBox />
      <ScrollableTabBar />
    </div>
  );
}
