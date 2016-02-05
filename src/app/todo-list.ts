import { Component, ViewEncapsulation } from 'angular2/core';
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
  `,
  encapsulation: ViewEncapsulation.None
})

export class TodoList {

  constructor(public todoService: TodoService) {

  }
}
