export class Cell {

  private _value: number = 0;
  private _possibles: Array<number> = [];

  constructor(private _row: number, private _col: number) {
    this.resetCell();
  }

  get row(): number {
    return this._row;
  }

  get col(): number {
    return this._col;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get possibles(): Array<number> {
    return this._possibles;
  }

  private resetCell() {
    this._value = 0;
    this.resetPossibles();
  }

  private resetPossibles() {
    for (let pos = 0; pos < 9; pos++) {
      this._possibles[pos] = pos + 1;
    }
  }


  private possiblesContains(value: number): boolean {
    return this._possibles.some(pos => pos === value);
  }

  valueChanged(value: number) {
    if (!value) {
      this._value = 0;
      this.resetPossibles();
    } else {
      this._value = value;
      if (value != 0) {
        this._possibles = [this._value];
      }
    }
  }

  addPossible(value: number) {
    if (!this.possiblesContains(value) && value !== 0 && this._value !== 0) {
      this._possibles.push(value);
      this._possibles.sort();
    }
  }

  removePossible(value: number) {
    if (this.possiblesContains(value) && this._possibles.length > 1) {
      this._possibles = this._possibles.filter(pos => pos !== value);
    }
  }
}
