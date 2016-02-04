import { Component, EventEmitter, Output } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
    <input #newItem [(ngModel)]="currentItem">
    <button (click)="add()">add</button>
  `
})

export default class TodoInput {

  currentItem = '';
  @Output() onAdd = new EventEmitter();
  add() {
    this.onAdd.emit(this.currentItem);
    this.currentItem = '';
  }
}
