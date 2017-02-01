import {Component, OnInit, Input} from '@angular/core';
import {Cell} from "./cell";
import {BoardService} from "../board/board.service";

@Component({
  selector: 'suf-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  @Input()
  cell: Cell;

  private valueChanged(): void {
    this.cell.valueChanged();
    this.boardService.getBoard.valueChanged(this.cell.getValue(), this.cell.getRow(), this.cell.getCol())
  }
}
