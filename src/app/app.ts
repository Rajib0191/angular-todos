import { Component, inject, signal } from '@angular/core';
import { TodoServices } from './todo/services/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todos');
  protected readonly todoService = inject(TodoServices);

  todoTitle = '';
  todos = this.todoService.filterTodos;
  stats = this.todoService.stats;
  filter = this.todoService.filter;

  addTodo(title: string) {
    this.todoService.addTodo(title);
  }

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
