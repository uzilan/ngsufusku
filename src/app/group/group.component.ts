import {Component, OnInit, Input} from '@angular/core';
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
}
