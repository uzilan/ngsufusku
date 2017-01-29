export class Bounderies {

  minX: number;
  minY: number;
  maxX: number;
  maxY: number;

  constructor(minX: number, minY: number, maxX: number, maxY: number) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  static getGroupBounderies(row: number, col: number): Bounderies {

    var minX, maxX, minY, maxY;

    if (row >= 0 && row < 3) {
      minX = 0;
      maxX = 3;
    } else if (row >= 3 && row < 6) {
      minX = 3;
      maxX = 6;
    } else {
      minX = 6;
      maxX = 9;
    }

    if (col >= 0 && col < 3) {
      minY = 0;
      maxY = 3;
    } else if (col >= 3 && col < 6) {
      minY = 3;
      maxY = 6;
    } else {
      minY = 6;
      maxY = 9;
    }

    return new Bounderies(minX, minY, maxX, maxY);
  }
}
