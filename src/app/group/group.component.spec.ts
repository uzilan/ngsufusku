/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {GroupComponent} from "./group.component";
import {CellComponent} from "../cell/cell.component";
import {BoardComponent} from "../board/board.component";
import {HideZerosPipe} from "../cell/hide-zeros.pipe";
import {FormsModule} from "@angular/forms";
import {BoardService} from "../board/board.service";
import {Group} from "./group";

describe('GroupComponent', () => {
  let component: GroupComponent;
  let fixture: ComponentFixture<GroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupComponent, CellComponent, BoardComponent, HideZerosPipe],
      providers: [BoardService],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
