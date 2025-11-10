import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListHeader } from './todo-list-header';

describe('TodoListHeader', () => {
  let component: TodoListHeader;
  let fixture: ComponentFixture<TodoListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
