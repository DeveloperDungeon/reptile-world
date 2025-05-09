import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export default function useInteraction(element: RefObject<HTMLElement | null>) {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  const dragStartRef = useRef<{ x: number, y: number } | null>(null);

  const onPointerDown = useCallback((e: PointerEvent) => {
    dragStartRef.current = { x: e.offsetX, y: e.offsetY };
  }, []);

  const onPointerUp = useCallback(() => {
    dragStartRef.current = null;
  }, []);

  const onPointerMove = useCallback((e: PointerEvent) => {
    if (dragStartRef.current == null) return;

    const moveX = e.offsetX - dragStartRef.current.x;
    const moveY = e.offsetY - dragStartRef.current.y;

    setDx((dx) => dx + moveX);
    setDy((dy) => dy + moveY);
    dragStartRef.current.x += moveX;
    dragStartRef.current.y += moveY;
  }, []);

  useEffect(() => {
    if (element.current == null) return;

    const e = element.current;

    e.addEventListener('pointerdown', onPointerDown);
    e.addEventListener('pointerup', onPointerUp);
    e.addEventListener('pointermove', onPointerMove);

    return () => {
      e.removeEventListener('pointerdown', onPointerDown);
      e.removeEventListener('pointerup', onPointerUp);
      e.removeEventListener('pointermove', onPointerMove);
    };
  }, [onPointerDown, onPointerUp, onPointerMove, element]);

  // dx or dy will be updated when dragStartRef is changed.
  // So it's safe to keep dragStartRef and ref.
  return { dx, dy, isDragging: dragStartRef.current != null };
}
