import {Component, OnInit} from "@angular/core";
import {Board} from "./board";

@Component({
  selector: 'suf-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  board: Board = new Board();
}
