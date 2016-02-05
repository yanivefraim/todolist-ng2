import { Component } from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-list',
  template: `
    <style>
      .completed {
        color: green;
      }
    </style>
    <ul>
      <li *ngFor="#todo of todoService.todos" [ngClass]="{completed: todo.completed}">{{todo.text}}</li>
    </ul>
  `
})

export class TodoList {

  constructor(public todoService: TodoService) {

  }
}
