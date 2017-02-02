export class Bounderies {

  private _minX: number;
  private _minY: number;
  private _maxX: number;
  private _maxY: number;

  constructor(minX: number, minY: number, maxX: number, maxY: number) {
    this._minX = minX;
    this._minY = minY;
    this._maxX = maxX;
    this._maxY = maxY;
  }

  get minX(): number {
    return this._minX;
  }

  get minY(): number {
    return this._minY;
  }

  get maxX(): number {
    return this._maxX;
  }

  get maxY(): number {
    return this._maxY;
  }

  static getGroupBounderies(row: number, col: number): Bounderies {

    let minX, maxX, minY, maxY;

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
