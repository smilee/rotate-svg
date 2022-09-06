import Vector2D from "./Vector2D";

export default class Point2D {
  public static ZER0 = Point2D.from(0, 0);

  x: number;

  y: number;

  static from(x: number, y: number) {
    return new Point2D(x, y);
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(other: Point2D): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;

    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  plus(other: Point2D): Point2D {
    return new Point2D(this.x + other.x, this.y + other.y);
  }

  minus(other: Point2D): Point2D {
    return new Point2D(this.x - other.x, this.y - other.y);
  }

  rotate({
    angle,
    origin,
  }: {
    angle: number,
    origin: Point2D,
  }) {
    const x = origin.x
      + (this.x - origin.x)
      * Math.cos(angle)
      - (this.y - origin.y)
      * Math.sin(angle);
    
    const y = origin.y
      + (this.x - origin.x)
      * Math.sin(angle)
      + (this.y - origin.y)
      * Math.cos(angle);
    
    return Point2D.from(x, y);
  }
}
