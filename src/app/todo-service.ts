import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {

  todos = ['hello world'];
  addItem(text) {
    this.todos.push(text);
  }
}
