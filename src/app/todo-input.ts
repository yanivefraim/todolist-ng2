import { Component } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
    <input #newItem>
    <button (contextmenu)="add(newItem.value, $event)">add</button>
  `
})

export default class TodoInput {
  //
  add(value, e) {
    e.preventDefault();
    console.log(value);
  }
}
