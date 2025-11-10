import { Component, inject, signal } from '@angular/core';
import { TodoServices } from './todo/services/todo';
import { FormsModule } from '@angular/forms';
import { Header } from './todo/components/header/header';
import { TodoForm } from './todo/components/todo-form/todo-form';
import { TodoFilter } from './todo/components/todo-filter/todo-filter';
import { TodoListHeader } from './todo/components/todo-list-header/todo-list-header';
import { TodoListItem } from './todo/components/todo-list-item/todo-list-item';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, TodoForm, TodoFilter, TodoListHeader, TodoListItem],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todos');
  protected readonly todoService = inject(TodoServices);

  todos = this.todoService.filterTodos;
}
