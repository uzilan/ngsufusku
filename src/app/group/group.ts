import {Bounderies} from "../board/bounderies";
import {Cell} from "../cell/cell";
export class Group {

  private _cells: Array<Cell> = [];

  static getGroupIndex(row: number, col: number): number {

    let gb = Bounderies.getGroupBounderies(row, col);

    if (gb.minX === 0) {
      if (gb.minY === 0) {
        return 0;
      } else if (gb.minY === 3) {
        return 1;
      } else {
        return 2;
      }
    } else if (gb.minX === 3) {
      if (gb.minY === 0) {
        return 3;
      } else if (gb.minY === 3) {
        return 4;
      } else {
        return 5;
      }
    } else {
      if (gb.minY === 0) {
        return 6;
      } else if (gb.minY === 3) {
        return 7;
      } else {
        return 8;
      }
    }
  }

  add(cell: Cell): void {
    this._cells.push(cell);
  }

  get cells(): Array<Cell> {
    return this._cells;
  }
}
