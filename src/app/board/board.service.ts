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

  cellValueChanged(event: any) {
    let row = this._board.getRow(event.cell.row);
    let col = this._board.getCol(event.cell.col);
    let group = this._board.getGroupByRowAndCol(event.cell.row, event.cell.col);

    this.checkCells(row, event.cell, event.value);
    this.checkCells(col, event.cell, event.value);
    this.checkCells(group, event.cell, event.value);
  }

  private checkCells(cells: Array<Cell>, currentCell: Cell, value: number) {
    let cellsWithoutCurrentCell = cells.filter(cell => cell !== currentCell);

    if (currentCell.value !== value) {
      if (value) {
        cellsWithoutCurrentCell.forEach(cell => cell.removePossible(value));
      } else {
        cellsWithoutCurrentCell.forEach(cell => cell.addPossible(currentCell.value));
      }
    }
  }

  contains(cells: Array<Cell>, currentCell: Cell): boolean {
    return cells.some(cell => cell.value === currentCell.value);
  }
}
