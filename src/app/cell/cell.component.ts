import {Component, OnInit, Input} from '@angular/core';
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

  private valueChanged( event: KeyboardEvent): void {
    const value = +event.key;
    this.cell.valueChanged(value);
    this.boardService.cellValueChanged(this.cell.row, this.cell.col);
  }
}
