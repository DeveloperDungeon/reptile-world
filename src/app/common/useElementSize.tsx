import { RefObject, useCallback, useEffect, useState } from 'react';

export default function useElementSize(elementRef: RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    const { width, height } = entries[0].contentRect;

    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    const currentElement = elementRef.current;

    if (currentElement) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(currentElement);
    }

    return () => {
      if (resizeObserver && currentElement) {
        resizeObserver.unobserve(currentElement);
        resizeObserver.disconnect();
        console.log('ResizeObserver detached.');
      }
      resizeObserver = null;
    };
  });

  return { width, height };
}
