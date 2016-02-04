import TodoInput from './todo-input';
import {TodoList} from './todo-list';
import { Component } from 'angular2/core';


@Component({
  selector: 'todo-app',
  template: `
      <todo-input (onAdd) = addItem($event)></todo-input>
      <todo-list [todos]="todos"></todo-list>
  `,
  directives: [TodoInput, TodoList]
})

export class TodoApp {
  todos = ['hello world'];

  addItem(text) {
    this.todos.push(text);
  }
}
