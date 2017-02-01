import {Cell} from "../cell/cell";
import {Group} from "../group/group";

export class Board {

  private board: Array<Array<Cell>> = [];
  private groups: Array<Group> = [];

  constructor() {
    this.resetBoard();
  }

  private resetBoard() {
    for (let row = 0; row < 9; row++) {
      this.board[row] = [];
      this.groups[row] = new Group;
      for (let col = 0; col < 9; col++) {
        this.board[row][col] = new Cell(this, row, col);
      }
    }

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        let groupIndex = Group.getGroupIndex(row, col);
        this.groups[groupIndex].add(this.board[row][col]);
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
    let currentCell = this.board[row][col];
    this.checkCells(this.getRow(row), currentCell);
    this.checkCells(this.getCol(col), currentCell);
    this.checkCells(this.getGroup(Group.getGroupIndex(row, col)), currentCell);
  }

  private checkCells(cells: Array<Cell>, currentCell: Cell) {
    let cellsWithoutCurrentCell = cells.filter(cell => cell !== currentCell);

    cellsWithoutCurrentCell.forEach(cell => cell.removePossible(currentCell.getValue()));

    if (this.contains(cellsWithoutCurrentCell, currentCell)) {
      console.info("row does contains " + currentCell.getValue());
    } else {
      console.info("row does not contain " + currentCell.getValue());
    }
  }

  contains(cells: Array<Cell>, currentCell: Cell): boolean {
    return cells.some(cell => cell.getValue() === currentCell.getValue());
  }

}
