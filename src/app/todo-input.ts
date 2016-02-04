import { Component, EventEmitter, Output } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
    <input #newItem [(ngModel)]="currentItem">
    <button (click)="add(newItem.value, $event)">add</button>
  `
})

export default class TodoInput {

  currentItem = '';
  @Output() onAdd = new EventEmitter();
  add(value) {
    this.onAdd.emit(value);
    this.currentItem = '';
  }
}
