import { Component, inject, Input } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { TodoServices } from '../../services/todo';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.scss',
})
export class TodoListItem {
  protected readonly todoService = inject(TodoServices);
  @Input() todo!: Todo;

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }

  toggleTodo(id: string) {
    this.todoService.toggleTodo(id);
  }

  renameTodo(id: string, title: string) {
    this.todoService.renameTodo(id, title);
  }
}
