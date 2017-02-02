import {Component, OnInit} from "@angular/core";
import {Board} from "./board";
import {BoardService} from "./board.service";

@Component({
  selector: 'suf-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService]
})

export class BoardComponent implements OnInit {

  private board: Board;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.board = this.boardService.board;
  }
}
