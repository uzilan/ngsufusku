import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Cell} from "./cell";
import {BoardService} from "../board/board.service";
import {isNumber} from "util";


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
  }

  @Input()
  cell: Cell;

  @Output()
  cellValueChanged = new EventEmitter();

  private valueChanged(event: KeyboardEvent): void {
    if (String(event.key) === "Tab") {
      return;
    }

    const value = +event.key;

    this.cellValueChanged.emit({"value": value, "cell": this.cell});
    this.cell.valueChanged(value);
  }
}
