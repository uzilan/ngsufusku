export class Cell {

  private _value: number = 0;
  private _oldValue: number = 0;
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

  get oldValue(): number {
    return this._oldValue;
  }

  get possibles(): Array<number> {
    return this._possibles;
  }

  private resetCell() {
    this._value = 0;
    this._oldValue = 0;
    for (let pos = 0; pos < 9; pos++) {
      this._possibles[pos] = pos + 1;
    }
  }

  removePossible(value: number) {
    if (this.possiblesContains(value) && this._possibles.length > 1) {
      this._possibles = this._possibles.filter(pos => pos !== value);
    }
  }

  private possiblesContains(value: number): boolean {
    return this._possibles.some(pos => pos === value);
  }

  valueChanged(value: number) {
    this._oldValue = this._value;
    this._value = value;
    if (value != 0) {
      this._possibles = [this._value];
    }
  }
}
