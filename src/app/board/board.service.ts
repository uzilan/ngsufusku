import {Injectable} from "@angular/core";
import {Board} from "./board";
import {Group} from "../group/group";
import {Cell} from "../cell/cell";

@Injectable()
export class BoardService {

  constructor() {
  }

  private _board: Board = new Board();

  get board(): Board {
    return this._board;
  }

  cellValueChanged(row: number, col: number) {
    let currentCell = this._board.board[row][col];
    this.checkCells(this._board.getRow(row), currentCell);
    this.checkCells(this._board.getCol(col), currentCell);
    this.checkCells(this._board.getGroup(Group.getGroupIndex(row, col)), currentCell);
  }

  private checkCells(cells: Array<Cell>, currentCell: Cell) {
    let cellsWithoutCurrentCell = cells.filter(cell => cell !== currentCell);

    cellsWithoutCurrentCell.forEach(cell => cell.removePossible(currentCell.value));

    if (this.contains(cellsWithoutCurrentCell, currentCell)) {
      console.info("row does contains " + currentCell.value);
    } else {
      console.info("row does not contain " + currentCell.value);
    }
  }

  contains(cells: Array<Cell>, currentCell: Cell): boolean {
    return cells.some(cell => cell.value === currentCell.value);
  }
}
