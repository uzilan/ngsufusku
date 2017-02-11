import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Cell} from "./cell";
import {BoardService} from "../board/board.service";


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  @Input()
  cell: Cell;

  @Output()
  cellValueChanged = new EventEmitter();

  private valueChanged( event: KeyboardEvent): void {
    const value = +event.key;
    this.cell.valueChanged(value);
    this.cellValueChanged.emit({"value": value, "cell": this.cell});
  }
}
