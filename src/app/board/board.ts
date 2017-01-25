import {Cell} from "../cell/cell";
export class Board {

  private board: Array<Array<Cell>> = [];

  constructor() {
    this.resetBoard();
  }

  private resetBoard() {
    for (let x = 0; x < 10; x++) {
      this.board[x] = [];
      for (let y = 0; y < 10; y++) {
        this.board[x][y] = new Cell;
      }
    }
  }

  public rows(): Array<Array<Cell>> {
    return this.board;
  }

}
