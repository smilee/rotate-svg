import { useRef, useState, useEffect, PointerEvent, MouseEvent } from 'react';

import './App.css'

import Point2D from './models/Point2D';
import Vector2D from './models/Vector2D';
import Quadrilateral from './models/Quadrilateral';

import usePointerEvent from './hooks/usePointerEvent';

function App() {
  const previousPosition = useRef(Point2D.ZER0);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [quadrilateral, setQuadrilateral] = useState(
    Quadrilateral.from(
      Point2D.ZER0,
      Point2D.ZER0,
      Point2D.ZER0,
      Point2D.ZER0,
      {offset: Point2D.ZER0}
    )
  );

  const { positionFromEvent } = usePointerEvent({object: quadrilateral});

  // Initialize quadrilateral
  const offset = Point2D.from(100, 100);
  useEffect(() => {
    setQuadrilateral(Quadrilateral.from(
      Point2D.from(0, 0),
      Point2D.from(offset.x, 0),
      Point2D.from(offset.x, offset.y),
      Point2D.from(0, offset.y),
      {offset},
    ));
  }, [])

  function handlePointerDownControlPoint({ event, controlPoint }: { event: PointerEvent, controlPoint: Point2D }) {
    const position = positionFromEvent(event);
    previousPosition.current = Point2D.from(position.x, position.y);

    setIsDragging(true);
  }

  function handlePointerMove(event: PointerEvent) {
    if (!isDragging) {
      return;
    }
    
    const position = positionFromEvent(event);

    const d = previousPosition.current.minus(position)
    const a = Math.atan2(d.y, d.x);

    setAngle(angle + (a * 180 / Math.PI));

    previousPosition.current = Point2D.from(position.x, position.y);
  }

  function handlePointerUp(event: MouseEvent) {
    setIsDragging(false);
  }

  return (
    <div className="App">
      <div>
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <g id="selection" transform={`rotate(${angle})`}>
            <polygon
              points={`${quadrilateral.offset.x + quadrilateral.point1.x},${quadrilateral.offset.y + quadrilateral.point1.y} ${quadrilateral.offset.x + quadrilateral.point2.x},${quadrilateral.offset.y + quadrilateral.point2.y} ${quadrilateral.offset.x + quadrilateral.point3.x},${quadrilateral.offset.y + quadrilateral.point3.y} ${quadrilateral.offset.x + quadrilateral.point4.x},${quadrilateral.offset.y + quadrilateral.point4.y}`}
              fill="red"
            />
            <circle cx={quadrilateral.offset.x + quadrilateral.center.x} cy={quadrilateral.offset.y + quadrilateral.center.y} r={4} fill="black" />
            <circle
              cx={quadrilateral.offset.x + quadrilateral.point1.x}
              cy={quadrilateral.offset.y + quadrilateral.point1.y}
              r={4}
              fill="yellow"
              onPointerDown={(event) => handlePointerDownControlPoint({event, controlPoint: quadrilateral.point1})}
            />
            <circle
              cx={quadrilateral.offset.x + quadrilateral.point2.x}
              cy={quadrilateral.offset.y + quadrilateral.point2.y}
              r={4}
              fill="green"
              onPointerDown={(event) => handlePointerDownControlPoint({event, controlPoint: quadrilateral.point2})}
            />
            <circle
              cx={quadrilateral.offset.x + quadrilateral.point3.x}
              cy={quadrilateral.offset.y + quadrilateral.point3.y}
              r={4} fill="blue"
              onPointerDown={(event) => handlePointerDownControlPoint({event, controlPoint: quadrilateral.point3})}
            />
            <circle
              cx={quadrilateral.offset.x + quadrilateral.point4.x}
              cy={quadrilateral.offset.y + quadrilateral.point4.y}
              r={4} fill="purple"
            onPointerDown={(event) => handlePointerDownControlPoint(
                { event, controlPoint: quadrilateral.point4}
              )}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
