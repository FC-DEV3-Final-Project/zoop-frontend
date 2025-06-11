import { RefObject } from "react";

export const useAutoScroll = (containerRef: RefObject<HTMLElement | null>) => {
  const scrollIfNeeded = (element: HTMLElement | null) => {
    if (!element || !containerRef.current) return;

    const buttonLeft = element.offsetLeft;
    const buttonRight = buttonLeft + element.offsetWidth;
    const scrollLeft = containerRef.current.scrollLeft;
    const containerWidth = containerRef.current.clientWidth;

    if (buttonLeft < scrollLeft) {
      containerRef.current.scrollTo({ left: buttonLeft, behavior: "smooth" });
    } else if (buttonRight > scrollLeft + containerWidth) {
      containerRef.current.scrollTo({
        left: buttonRight - containerWidth,
        behavior: "smooth",
      });
    }
  };

  return scrollIfNeeded;
};
