import {Cell} from "../cell/cell";
import {Group} from "../group/group";
import {bindOutputs} from "@angular/compiler/src/view_compiler/event_binder";

export class Board {

  private board: Array<Array<Cell>> = [];
  private groups: Array<Group> = [];

  constructor() {
    this.resetBoard();
  }

  private resetBoard() {
    for (let x = 0; x < 9; x++) {
      this.board[x] = [];
      this.groups[x] = new Group;
      for (let y = 0; y < 9; y++) {
        this.board[x][y] = new Cell(this, x, y);
      }
    }

    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        let groupIndex = Group.getGroupIndex(x, y);
        this.groups[groupIndex - 1].add(this.board[x][y]);
      }
    }
  }

  private getRow(no: number): Array<Cell> {
    return this.board[no];
  }

  private getCol(no: number): Array<Cell> {
    return this.board.map(row => row[no]);
  }

  private getGroup(no: number): Array<Cell> {
    return this.groups[no].getCells();
  }

  valueChanged(value: number, row: number, col: number): void {
    if (this.contains(this.getRow(row).splice(row, 1), value)) {
      console.info("row contains " + value);
    } else {
      console.info("row does not contain " + value);
    }
  }

  contains(cells: Array<Cell>, value: number): boolean {
    return cells.some(cell => cell.getValue() === value);
  }

}
