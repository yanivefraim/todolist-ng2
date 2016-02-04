import TodoInput from './todo-input';
import { Component } from 'angular2/core';


@Component({
  selector: 'todo-app',
  template: `
      <todo-input></todo-input>
      <div>{{message}}</div>
  `,
  directives: [TodoInput]
})

export class TodoApp {
  message = 'hello world';
}
