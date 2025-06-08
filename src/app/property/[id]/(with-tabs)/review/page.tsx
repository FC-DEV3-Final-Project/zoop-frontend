import ReviewTab from "./ReviewTab";

export default function ReviewPage({ params }: { params: { id: string } }) {
  return <ReviewTab id={params.id} />;
}
