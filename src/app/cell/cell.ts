import {Board} from "../board/board";
export class Cell {

  private value: number = 0;
  private possibles: Array<number> = [];

  constructor(private board: Board, private row: number, private col: number) {
    this.resetCell();
  }

  public getBoard(): Board {
    return this.board;
  }

  public getRow(): number {
    return this.row;
  }

  public getCol(): number {
    return this.col;
  }

  public getValue(): number {
    return this.value;
  }

  private resetCell() {
    this.value = 0;
    for (let x = 0; x < 9; x++) {
      this.possibles[x] = x;
    }
  }

  removePossible(value: number) {
    if (this.possiblesContains(value) && this.possibles.length > 1) {
      this.possibles = this.possibles.filter(pos => pos !== value);
    }
  }

  private possiblesContains(value: number): boolean {
    return this.possibles.some(pos => pos === value);
  }

  valueChanged() {
    if (this.value != 0) {
      this.possibles = [this.value];
    }
  }
}
