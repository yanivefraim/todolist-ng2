import { Component } from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="#todo of todoService.todos">{{todo.text}}</li>
    </ul>
  `
})

export class TodoList {

  constructor(public todoService: TodoService) {

  }
}
