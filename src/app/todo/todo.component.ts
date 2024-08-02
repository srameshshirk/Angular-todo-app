import { Component } from '@angular/core';

interface Todo {
  id: number;
  task: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  todos: Todo[] = [];
  nextId: number = 1;

  addTodo() {
    if (this.newTask.trim()) {
      this.todos.push({ id: this.nextId++, task: this.newTask });
      this.newTask = '';
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}