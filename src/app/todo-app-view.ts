import TodoInput from './todo-input';
import {TodoList} from './todo-list';
import { Component } from 'angular2/core';


@Component({
  selector: 'todo-app-view',
  template: `
      <todo-list></todo-list>
  `,
  directives: [TodoInput, TodoList]
})

export class TodoAppView {

}
