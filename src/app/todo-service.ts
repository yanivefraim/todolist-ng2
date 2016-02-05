import {Injectable} from 'angular2/core';

class TodoItem {
  constructor(public text: string, public completed: boolean){}
}

@Injectable()
export class TodoService {

  todos: TodoItem[] = [
    new TodoItem('hello world1', true),
    new TodoItem('hello world2', false),
    new TodoItem('hello world3', true),
  ];
  
  addItem(text) {
    this.todos.push(text);
  }
}
