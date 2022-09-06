export default class Vector2D {
  public static ZER0 = Vector2D.from(0, 0);

  x: number;

  y: number;

  static from(x: number, y: number) {
    return new Vector2D(x, y)
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get direction() {
    return Number(Math.atan2(-this.y, this.x).toFixed(2));
  }

  get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  // set direction(direction) {
  //   const magnitude = this.magnitude;
    
  //   this.x = Math.cos(direction) * magnitude;
  //   this.y = Math.sin(direction) * magnitude;
  // }

  // set magnitude(magnitude) {
  //   const direction = this.direction;

  //   this.x = Math.cos(direction) * magnitude;
  //   this.y = Math.sin(direction) * magnitude;
  // }
}
