import {Component, OnInit, Input} from '@angular/core';
import {Cell} from "./cell";

@Component({
  selector: 'suf-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  cell: Cell;

  private valueChanged(): void {
    this.cell.valueChanged();
    this.cell.getBoard().valueChanged(this.cell.getValue(), this.cell.getRow(), this.cell.getCol())
  }
}
