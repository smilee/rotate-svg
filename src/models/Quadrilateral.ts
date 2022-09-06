import Point2D from './Point2D';

export default class Quadrilateral {
  point1: Point2D;

  point2: Point2D;

  point3: Point2D;

  point4: Point2D;

  offset: Point2D;

  static from(
    point1: Point2D,
    point2: Point2D,
    point3: Point2D,
    point4: Point2D,
    { offset }: {offset: Point2D},
  ): Quadrilateral {
    return new Quadrilateral(point1, point2, point3, point4, { offset });
  }

  constructor(
    point1: Point2D,
    point2: Point2D,
    point3: Point2D,
    point4: Point2D,
    { offset }: {offset: Point2D},
  ) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.point4 = point4;
    this.offset = offset;
  }

  get left(): number {
    return Math.min(this.point1.x, this.point2.x, this.point3.x, this.point4.x);
  }

  get right(): number {
    return Math.max(this.point1.x, this.point2.x, this.point3.x, this.point4.x);
  }

  get top(): number {
    return Math.min(this.point1.y, this.point2.y, this.point3.y, this.point4.y);
  }

  get bottom(): number {
    return Math.max(this.point1.y, this.point2.y, this.point3.y, this.point4.y);
  }

  get width(): number {
    return this.right - this.left;
  }

  get height(): number {
    return this.bottom - this.top;
  }

  get center(): Point2D {
    return Point2D.from(
      this.offset.x - (this.width / 2),
      this.offset.y - (this.height / 2),
    );
  }
}
