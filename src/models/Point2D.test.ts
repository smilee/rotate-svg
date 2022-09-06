import Point2D from './Point2D';

describe('rotate', () => {
  context('when the angle in radians and the origin of rotation are given', () => {
    it('returns the rotated point', () => {
      expect(Point2D.from(3, 4).rotate({ angle: Math.PI, origin: Point2D.from(0, 0) }).x).toBeCloseTo(Point2D.from(-3, -4).x);
      expect(Point2D.from(3, 4).rotate({ angle: Math.PI, origin: Point2D.from(0, 0) }).y).toBeCloseTo(Point2D.from(-3, -4).y);
    })
  })
})
