import { useState, useRef, PointerEvent, ReactSVGElement } from "react";
import Point2D from "../models/Point2D";
import Rectangle from "../models/Quadrilateral";

export default function usePointerEvent({ object }: { object: Rectangle}) {
  const previousPosition = useRef({ x: 0, y: 0 });
  const [rotating, setRotating] = useState<boolean>(false);

  const positionFromEvent = (
    event: PointerEvent
  ) => {
    const { clientX, clientY } = event.nativeEvent;

    const x = clientX - object.left;
    const y = clientY - object.top;

    return Point2D.from(x, y);
  }

  return {
    positionFromEvent,
  }
}
