import {Cell} from "../cell/cell";
import {Group} from "../group/group";

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
        this.board[x][y] = new Cell;
      }
    }

    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        let groupIndex = Group.getGroupIndex(x, y);
        this.groups[groupIndex - 1].add(this.board[x][y]);
      }
    }
  }
}
