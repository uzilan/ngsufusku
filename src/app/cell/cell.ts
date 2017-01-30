export class Cell {

  private value: number = 0;
  private possibles: Array<number> = [];

  constructor() {
    this.resetCell();
  }

  private resetCell() {
    this.value = 0;
    for (let x = 0; x < 9; x++) {
      this.possibles[x] = x;
    }
  }

}
