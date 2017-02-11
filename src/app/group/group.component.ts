import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Group} from "./group";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input()
  group: Group;

  @Output()
  cellValueChanged = new EventEmitter();

  valueChanged(event: any): void {
    this.cellValueChanged.emit(event);
  }
}
