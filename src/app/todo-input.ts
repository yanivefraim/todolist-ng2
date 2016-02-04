import { Component, EventEmitter, Output } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
    <input #newItem [value]="currentItem">
    <button (click)="add(newItem.value, $event)">add</button>
  `
})

export default class TodoInput {

  currentItem = '123';
  @Output() onAdd = new EventEmitter();
  add(value) {
    this.onAdd.emit(value);
  }
}
