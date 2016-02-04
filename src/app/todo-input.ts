import { Component } from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-input',
  template: `
    <input #newItem [(ngModel)]="currentItem">
    <button (click)="add()">add</button>
  `
})

export default class TodoInput {

  currentItem = '';
  constructor(public todoService: TodoService) {

  }

  add() {
    this.todoService.addItem(this.currentItem);
    this.currentItem = '';
  }
}
