import {Cell} from "../cell/cell";
import {Group} from "../group/group";

export class Board {

  private _board: Array<Array<Cell>> = [];
  private _groups: Array<Group> = [];

  constructor() {
    this.resetBoard();
  }

  private resetBoard() {
    for (let row = 0; row < 9; row++) {
      this._board[row] = [];
      this._groups[row] = new Group;
      for (let col = 0; col < 9; col++) {
        this._board[row][col] = new Cell(row, col);
      }
    }

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        let groupIndex = Group.getGroupIndex(row, col);
        this._groups[groupIndex].add(this._board[row][col]);
      }
    }
  }

  get board(): Array<Array<Cell>> {
    return this._board;
  }

  get groups(): Array<Group> {
    return this._groups;
  }

  getRow(no: number): Array<Cell> {
    return this._board[no];
  }

  getCol(no: number): Array<Cell> {
    return this._board.map(row => row[no]);
  }

  getGroup(no: number): Array<Cell> {
    return this._groups[no].getCells();
  }


}
