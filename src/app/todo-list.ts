import { Component } from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-list',
  template: `
      <div>{{todoService.todos | json}}</div>
  `
})

export class TodoList {

  constructor(public todoService: TodoService) {

  }
}
