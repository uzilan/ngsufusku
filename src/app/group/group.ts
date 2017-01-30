import {Bounderies} from "../board/bounderies";
import {Cell} from "../cell/cell";
export class Group {

  private cells: Array<Cell> = [];

  static getGroupIndex(row: number, col: number): number {

    let gb = Bounderies.getGroupBounderies(row, col);

    if (gb.minX === 0) {
      if (gb.minY === 0) {
        return 1;
      } else if (gb.minY === 3) {
        return 2;
      } else {
        return 3;
      }
    } else if (gb.minX === 3) {
      if (gb.minY === 0) {
        return 4;
      } else if (gb.minY === 3) {
        return 5;
      } else {
        return 6;
      }
    } else {
      if (gb.minY === 0) {
        return 7;
      } else if (gb.minY === 3) {
        return 8;
      } else {
        return 9;
      }
    }
  }

  add(cell: Cell): void {
    this.cells.push(cell);
  }

  public getCells(): Array<Cell> {
    return this.cells;
  }
}
