import { Component, inject } from '@angular/core';
import { TodoServices } from '../../services/todo';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-todo-filter',
  imports: [Button],
  templateUrl: './todo-filter.html',
  styleUrl: './todo-filter.scss',
})
export class TodoFilter {
  protected readonly todoService = inject(TodoServices);
  filter = this.todoService.filter;
}
