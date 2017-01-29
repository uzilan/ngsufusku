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
}
