import { Component, Inject } from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-list',
  template: `
      <div>{{todoService.todos | json}}</div>
  `
})

export class TodoList {

  constructor(@Inject(TodoService) public todoService, @Inject('theAnswer') answer) {
    console.log(answer);
  }
}
