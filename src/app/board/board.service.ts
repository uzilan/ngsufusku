import {Injectable} from "@angular/core";
import {Board} from "./board";

@Injectable()
export class BoardService {

  constructor() {
  }

  private board: Board = new Board();

  get getBoard(): Board {
    return this.board;
  }

}
