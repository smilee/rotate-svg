import Vector2D from './Vector2D';

describe('direction', () => {
  context('when x = 5 and y = 3', () => {
    it('returns -0.54 for direction', () => {
      const vector = Vector2D.from(5, 3);
      expect(vector.direction).toBe(-0.54);
    });
  });

  context('when x = -5 and y = 3', () => {
    it('returns 2.60 for direction', () => {
      const vector = Vector2D.from(-5, 3);
      expect(vector.direction).toBe(-2.60);
    });
  });

  context('when x = -5 and y = -3', () => {
    it('returns 2.60 for direction', () => {
      const vector = Vector2D.from(-5, -3);
      expect(vector.direction).toBe(2.60);
    });
  });

  context('when x = 5 and y = -3', () => {
    it('returns 0.54 for direction', () => {
      const vector = Vector2D.from(5, -3);
      expect(vector.direction).toBe(0.54);
    });
  });
})
