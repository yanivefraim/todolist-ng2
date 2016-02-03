import {Component} from 'angular2/core';


@Component({
  selector: 'todo-ng2-app',
  providers: [],
  templateUrl: 'app/todo-ng2.html',
  directives: [],
  pipes: []
})
export class TodoNg2App {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
