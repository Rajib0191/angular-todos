import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoServices } from '../../services/todo';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm {
  protected readonly todoService = inject(TodoServices);

  todoTitle = '';

  addTodo() {
    if (this.todoTitle !== '') {
      this.todoService.addTodo(this.todoTitle);
      this.todoTitle = '';
    }
  }
}
