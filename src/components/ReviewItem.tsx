type ReviewItemProps = {
  content: string;
  likes: number;
  comments: number;
};

export default function ReviewItem({ content, likes, comments }: ReviewItemProps) {
  return (
    <div className="inline-flex h-8 items-center justify-start gap-6 self-stretch py-[5px] pr-[3px]">
      <div className="flex-1 justify-center font-['Pretendard'] text-sm font-normal leading-tight text-black">
        {content}
      </div>
      <div className="flex items-center justify-start gap-1">
        <div className="flex w-6 items-center justify-start gap-0.5">
          <div className="relative h-4 w-4 overflow-hidden">
            <div className="absolute left-[1.50px] top-[3px] h-3 w-3 bg-zinc-400" />
          </div>
          <div className="justify-center font-['Pretendard'] text-xs font-normal leading-none text-zinc-400">
            {likes}
          </div>
        </div>
        <div className="flex w-6 items-center justify-start gap-0.5">
          <div className="relative h-4 w-4">
            <div className="absolute left-[2px] top-[2px] h-3 w-3 rounded-[1px] outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
          </div>
          <div className="justify-center font-['Pretendard'] text-xs font-normal leading-none text-zinc-400">
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
}
