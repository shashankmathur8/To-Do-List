import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoOnlineComponent } from './to-do-online.component';

describe('ToDoOnlineComponent', () => {
  let component: ToDoOnlineComponent;
  let fixture: ComponentFixture<ToDoOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
