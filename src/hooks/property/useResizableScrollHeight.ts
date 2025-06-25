import { useEffect, useState } from "react";

export const useResizableScrollHeight = ({
  offset = 437,
  maxOffset = 200,
}: {
  offset?: number;
  maxOffset?: number;
}) => {
  const [initialHeight, setInitialHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    const max = window.innerHeight - maxOffset;
    const initial = window.innerHeight - offset;

    setMaxHeight(max);
    setInitialHeight(initial);
    setListHeight(Math.min(initial, max));
  }, [offset, maxOffset]);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const nextHeight = Math.min(maxHeight, initialHeight + scrollTop);
    setListHeight(nextHeight);
  };

  return {
    listHeight,
    initialHeight,
    maxHeight,
    handleScroll,
  };
};
