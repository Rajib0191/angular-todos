import { computed, effect, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.models';

const TODO_KEY = 'todos';

type Filter = 'all' | 'active' | 'completed';

@Injectable({
  providedIn: 'root',
})
export class TodoServices {
  private readonly todos = signal<Todo[]>(this.loadTodo());

  readonly filter = signal<Filter>('all');

  readonly filterTodos = computed(() => {
    const f = this.filter();
    const items = this.todos();

    if (f === 'active') return items.filter((item) => !item.completed);
    if (f === 'completed') return items.filter((item) => item.completed);
    return items;
  });

  readonly stats = computed(() => {
    const items = this.todos();
    return {
      total: items.length,
      active: items.filter((item) => !item.completed).length,
      completed: items.filter((item) => item.completed).length,
    };
  });

  constructor() {
    effect(() => {
      localStorage.setItem(TODO_KEY, JSON.stringify(this.todos()));
    });
  }

  addTodo(title: string) {
    this.todos.update((items) => [
      ...items,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
        createdAt: new Date(),
      },
    ]);
    console.log(this.todos());
  }

  removeTodo(id: string) {
    this.todos.update((items) => items.filter((item) => item.id !== id));
  }

  toggleTodo(id: string) {
    this.todos.update((items) =>
      items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  }

  renameTodo(id: string, title: string) {
    this.todos.update((items) => items.map((item) => (item.id === id ? { ...item, title } : item)));
  }

  private loadTodo(): Todo[] {
    try {
      const raw = localStorage.getItem(TODO_KEY);
      return raw ? (JSON.parse(raw) as Todo[]) : [];
    } catch (error) {
      return [];
    }
  }
}
