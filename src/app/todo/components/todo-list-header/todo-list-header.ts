import { Component, inject } from '@angular/core';
import { TodoServices } from '../../services/todo';

@Component({
  selector: 'app-todo-list-header',
  imports: [],
  templateUrl: './todo-list-header.html',
  styleUrl: './todo-list-header.scss',
})
export class TodoListHeader {
  protected readonly todoService = inject(TodoServices);
  stats = this.todoService.stats;
}
