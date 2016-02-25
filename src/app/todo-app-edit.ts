import TodoInput from './todo-input';
import {TodoList} from './todo-list';
import { Component } from 'angular2/core';


@Component({
  selector: 'todo-app-edit',
  template: `
      <todo-input></todo-input>
      <todo-list></todo-list>
  `,
  directives: [TodoInput, TodoList]
})

export class TodoAppEdit {

}
