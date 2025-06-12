import { useEffect, useRef } from "react";
import { useAutoScroll } from "@/hooks/property/useAutoScroll";

export const useScrollActiveTab = (
  selected: string,
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  const scrollTabOnClick = useAutoScroll(containerRef);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // 선택된 탭이 바뀔 때 자동 스크롤
  useEffect(() => {
    const el = buttonRefs.current[selected];
    if (el) scrollTabOnClick(el);
  }, [selected]);

  // 외부에서 ref 연결 시 사용
  const registerRef = (key: string) => (el: HTMLButtonElement | null) => {
    buttonRefs.current[key] = el;
  };

  return { registerRef, scrollTabOnClick };
};
