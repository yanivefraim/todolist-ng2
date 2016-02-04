import TodoInput from './todo-input';
import { Component } from 'angular2/core';


@Component({
  selector: 'todo-app',
  template: `
      <todo-input (onAdd) = addItem($event)></todo-input>
      <div>{{todos | json}}</div>
  `,
  directives: [TodoInput]
})

export class TodoApp {
  todos = ['hello world'];

  addItem(text) {
    this.todos.push(text);
  }
}
