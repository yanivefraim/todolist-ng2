import { Component } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
    <input #newItem>
    <button (click)="add(newItem.value)">add</button>
  `
})

export default class TodoInput {
  //
  add(value) {
    console.log(value);
  }
}
