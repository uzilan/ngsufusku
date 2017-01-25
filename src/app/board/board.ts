export class Board {
  private data: Number[][] = [];

  constructor() {
    for (let x = 0; x < 10; x++) {
      this.data[x] = [];
      for (let y = 0; y < 10; y++) {
        this.data[x][y] = 0;
      }
    }
  }

  getBoard() {
    return this.data;
  }
}
