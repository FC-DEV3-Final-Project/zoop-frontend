import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1 px-4">
      <p className="text-largeTitle">Large Title 텍스트</p>
      <p className="text-title1">Title 1 텍스트</p>
      <p className="text-title2">Title 2 텍스트</p>
      <p className="text-title3">Title 3 텍스트</p>
      <p className="text-title4">Title 4 텍스트</p>
      <p className="text-subtitle1">Subtitle 1 텍스트</p>
      <p className="text-subtitle2">Subtitle 2 텍스트</p>
      <p className="text-subtitle3">Subtitle 3 텍스트</p>
      <p className="text-subtitle4">Subtitle 4 텍스트</p>
      <p className="text-body1">Body 1 텍스트</p>
      <p className="text-body2">Body 2 텍스트</p>
      <p className="text-body3">Body 3 텍스트</p>
      <p className="text-caption1">Caption 1 텍스트</p>
      <p className="text-caption2">Caption 2 텍스트</p>
      <p className="text-caption3">Caption 3 텍스트</p>
      <p className="text-footnote">Footnote 텍스트</p>

      <Button variant={"default"}>다음</Button>
    </div>
  );
}
